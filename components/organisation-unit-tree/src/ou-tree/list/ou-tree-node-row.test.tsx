import { CustomDataProvider } from '@dhis2/app-runtime'
import '@testing-library/jest-dom'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {
    createGistResolver,
    createTreeResolver,
    zambiaOrgUnits,
} from '../__fixtures__/index'
import { GIST_RESOURCE, TREE_RESOURCE } from '../data/index'
import {
    OuTreeNodeStoreProvider,
    OuTreeProvider,
    useOuTreeNode,
} from '../tree/index'
import { useTreeState } from '../tree/ou-tree-provider'
import type { TreeState } from '../tree/tree-state'
import { OuTreeNodeRow, type RenderLabel } from './ou-tree-node-row'

const realChildren = createTreeResolver({ orgUnits: zambiaOrgUnits })
const gist = createGistResolver({ orgUnits: zambiaOrgUnits })

type ChildrenResolver = typeof realChildren

const never: ChildrenResolver = (type, query) =>
    query.id === 'ou-1/children'
        ? new Promise(() => undefined)
        : realChildren(type, query)
const failing: ChildrenResolver = (type, query) =>
    query.id === 'ou-1/children'
        ? Promise.reject(new Error('Simulated failure'))
        : realChildren(type, query)

const setup = ({
    id = 'ou-1',
    children = realChildren as ChildrenResolver,
    renderLabel,
}: {
    id?: string
    children?: ChildrenResolver
    renderLabel?: RenderLabel
} = {}) => {
    const ref: { tree?: TreeState } = {}
    const Probe = () => {
        const tree = useTreeState()
        if (!ref.tree) {
            ref.tree = tree
            jest.spyOn(tree, 'toggle')
            jest.spyOn(tree.store, 'retryChildrenPage')
        }
        const { children: status } = useOuTreeNode(id)
        return (
            <OuTreeNodeRow
                row={{ kind: 'node', id, depth: 0, children: status }}
                renderLabel={renderLabel}
                dataTest="t"
            />
        )
    }
    render(
        <CustomDataProvider
            data={{
                [TREE_RESOURCE]: children,
                [GIST_RESOURCE]: gist,
            }}
        >
            <OuTreeNodeStoreProvider>
                <OuTreeProvider rootIds={[id]}>
                    <Probe />
                </OuTreeProvider>
            </OuTreeNodeStoreProvider>
        </CustomDataProvider>
    )
    return ref as { tree: TreeState }
}

const ready = () => screen.findByTestId('t-row')

describe('OuTreeNodeRow', () => {
    it('renders the name, a toggle for a parent and aria-expanded', async () => {
        setup()
        const row = await ready()

        expect(row).toHaveAttribute('data-row-kind', 'node')
        expect(row).toHaveAttribute('data-id', 'ou-1')
        expect(row).toHaveAttribute('role', 'treeitem')
        expect(row).toHaveAttribute('aria-expanded', 'false')
        expect(screen.getByTestId('t-label')).toHaveTextContent('Zambia')
        expect(screen.getByTestId('t-toggle')).toBeInTheDocument()
    })

    it('has no toggle and no aria-expanded for a leaf', async () => {
        setup({ id: 'ou-4' })
        const row = await ready()

        expect(row).not.toHaveAttribute('aria-expanded')
        expect(screen.queryByTestId('t-toggle')).toBeNull()
        expect(screen.getByTestId('t-label')).toHaveTextContent(
            'Kabwe Health Centre'
        )
    })

    it('toggles from the toggle and from the label of a parent', async () => {
        const ref = setup()
        await ready()

        await userEvent.click(screen.getByTestId('t-toggle'))
        await userEvent.click(screen.getByTestId('t-label'))

        expect(ref.tree.toggle).toHaveBeenCalledTimes(2)
        expect(ref.tree.toggle).toHaveBeenCalledWith('ou-1')
        expect(screen.getByTestId('t-row')).toHaveAttribute(
            'aria-expanded',
            'false'
        )
    })

    it('does not toggle from the label of a leaf', async () => {
        const ref = setup({ id: 'ou-4' })
        await ready()

        await userEvent.click(screen.getByTestId('t-label'))

        expect(ref.tree.toggle).not.toHaveBeenCalled()
    })

    it('shows the loader instead of the toggle while page one loads', async () => {
        const ref = setup({ children: never })
        await ready()

        act(() => ref.tree.open('ou-1'))

        expect(await screen.findByTestId('t-loader')).toBeInTheDocument()
        expect(screen.queryByTestId('t-toggle')).toBeNull()
    })

    it('shows the error icon instead of the toggle and a retry button when page one failed', async () => {
        const ref = setup({ children: failing })
        await ready()

        act(() => ref.tree.open('ou-1'))
        await screen.findByTestId('t-error')
        expect(screen.queryByTestId('t-toggle')).toBeNull()
        await userEvent.click(screen.getByTestId('t-retry'))

        expect(ref.tree.store.retryChildrenPage).toHaveBeenCalledWith('ou-1', 1)
        expect(ref.tree.toggle).not.toHaveBeenCalled()
    })

    it('shows the plain toggle again once the failed node is closed', async () => {
        const ref = setup({ children: failing })
        await ready()
        act(() => ref.tree.open('ou-1'))
        await screen.findByTestId('t-error')

        act(() => ref.tree.close('ou-1'))

        expect(await screen.findByTestId('t-toggle')).toBeInTheDocument()
        expect(screen.queryByTestId('t-error')).toBeNull()
        expect(screen.queryByTestId('t-retry')).toBeNull()
    })

    it('renders renderLabel in the label slot with the toggle still present', async () => {
        const renderLabel: RenderLabel = ({ node, depth, toggle }) => (
            <button onClick={toggle}>
                {node.displayName}/{depth}
            </button>
        )
        const ref = setup({ renderLabel })
        await ready()

        await userEvent.click(screen.getByText('Zambia/0'))

        expect(ref.tree.toggle).toHaveBeenCalledWith('ou-1')
        expect(screen.getByTestId('t-toggle')).toBeInTheDocument()
        expect(screen.queryByTestId('t-label')).toBeNull()
        await waitFor(() =>
            expect(screen.getByTestId('t-row')).toHaveAttribute(
                'aria-expanded',
                'true'
            )
        )
    })
})

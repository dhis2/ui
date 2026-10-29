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
    useOuTree,
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
        // A row exists only once its node is stored, as in the list.
        const { node, childrenStatus: status } = useOuTreeNode(id)
        if (!node) {
            return null
        }
        return (
            <OuTreeNodeRow
                row={{
                    kind: 'node',
                    id,
                    depth: 0,
                    children: status,
                    view: 'browse',
                    result: false,
                }}
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

/** Renders the node's row as the tree builds it, after a search. */
const setupFiltered = ({
    id,
    term,
    children = realChildren as ChildrenResolver,
}: {
    id: string
    term: string
    children?: ChildrenResolver
}) => {
    const ref: { tree?: TreeState } = {}
    const Probe = () => {
        const tree = useTreeState()
        if (!ref.tree) {
            ref.tree = tree
            jest.spyOn(tree, 'toggle')
            jest.spyOn(tree.store, 'retryChildrenPage')
        }
        const { getRow, getRowIndex } = useOuTree()
        const index = getRowIndex(id)
        const row = index === undefined ? undefined : getRow(index)
        if (row?.kind !== 'node') {
            return null
        }
        return <OuTreeNodeRow row={row} dataTest="t" />
    }
    render(
        <CustomDataProvider
            data={{
                [TREE_RESOURCE]: children,
                [GIST_RESOURCE]: gist,
            }}
        >
            <OuTreeNodeStoreProvider>
                <OuTreeProvider rootIds={['ou-1']}>
                    <Probe />
                </OuTreeProvider>
            </OuTreeNodeStoreProvider>
        </CustomDataProvider>
    )
    act(() => ref.tree?.search(term))
    return ref as { tree: TreeState }
}

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

    it('has only the toggle space and no aria-expanded for a leaf', async () => {
        setup({ id: 'ou-4' })
        const row = await ready()

        expect(row).not.toHaveAttribute('aria-expanded')
        expect(screen.queryByTestId('t-toggle')).toBeNull()
        expect(screen.getByTestId('t-toggle-space')).toHaveAttribute(
            'aria-hidden',
            'true'
        )
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

    it('is a retry button around the label, not open, when page one failed', async () => {
        const ref = setup({ children: failing })
        await ready()

        act(() => ref.tree.open('ou-1'))
        const retry = await screen.findByTestId('t-retry')

        expect(retry).toBe(screen.getByRole('button', { name: 'Zambia' }))
        expect(retry).toContainElement(screen.getByTestId('t-label'))
        expect(screen.queryByTestId('t-toggle')).toBeNull()
        expect(screen.getByTestId('t-row')).toHaveAttribute(
            'aria-expanded',
            'false'
        )
    })

    it('opens the node again, requesting page one again, when the retry button is clicked', async () => {
        const ref = setup({ children: failing })
        await ready()
        act(() => ref.tree.open('ou-1'))
        await screen.findByTestId('t-retry')

        await userEvent.click(screen.getByTestId('t-retry'))

        expect(ref.tree.toggle).toHaveBeenCalledWith('ou-1')
        expect(ref.tree.store.retryChildrenPage).toHaveBeenCalledWith('ou-1', 1)
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

describe('OuTreeNodeRow in filtered mode', () => {
    it('shows a pruned result with the toggle space, the match, the result background and the eye', async () => {
        // Kabwe District: a result with children.
        setupFiltered({ id: 'ou-3', term: 'Kabwe' })
        const row = await ready()

        expect(row).not.toHaveAttribute('aria-expanded')
        expect(screen.getByTestId('t-toggle-space')).toBeInTheDocument()
        expect(screen.queryByTestId('t-toggle')).toBeNull()
        expect(screen.getByTestId('t-label')).toHaveClass('result')
        expect(screen.getByTestId('t-label')).toHaveTextContent(
            'Kabwe District'
        )
        expect(screen.getByTestId('t-match')).toHaveTextContent(/^Kabwe$/)
        expect(screen.getByTestId('t-reveal')).toBe(
            screen.getByRole('button', { name: 'Show all children' })
        )
    })

    it('shows a pruned ancestor plain, with the eye', async () => {
        setupFiltered({ id: 'ou-2', term: 'Kabwe' })
        await ready()

        expect(screen.getByTestId('t-label')).not.toHaveClass('result')
        expect(screen.queryByTestId('t-match')).toBeNull()
        expect(screen.getByTestId('t-reveal')).toBeInTheDocument()
    })

    it('shows no eye on a leaf result', async () => {
        setupFiltered({ id: 'ou-4', term: 'Kabwe' })
        await ready()

        expect(screen.getByTestId('t-match')).toBeInTheDocument()
        expect(screen.queryByTestId('t-reveal')).toBeNull()
    })

    it('reveals from the eye: the loader while page one loads, then the crossed eye', async () => {
        const ref = setupFiltered({
            id: 'ou-1',
            term: 'Kabwe',
            children: never,
        })
        await ready()

        await userEvent.click(screen.getByTestId('t-reveal'))

        expect(ref.tree.isRevealed('ou-1')).toBe(true)
        expect(await screen.findByTestId('t-loader')).toBeInTheDocument()
        expect(screen.queryByTestId('t-toggle-space')).toBeNull()
        expect(
            screen.getByRole('button', { name: 'Hide all children' })
        ).toBeInTheDocument()
    })

    it('is a retry button around the label, with the eye after it, when a revealed node failed', async () => {
        const ref = setupFiltered({
            id: 'ou-1',
            term: 'Kabwe',
            children: failing,
        })
        await ready()

        await userEvent.click(screen.getByTestId('t-reveal'))
        const retry = await screen.findByTestId('t-retry')

        expect(retry).toContainElement(screen.getByTestId('t-label'))
        expect(screen.getByTestId('t-reveal')).toBeInTheDocument()
        await userEvent.click(retry)
        expect(ref.tree.store.retryChildrenPage).toHaveBeenCalledWith('ou-1', 1)
        expect(ref.tree.toggle).not.toHaveBeenCalled()
    })

    it('marks a result among browse rows under a revealed node', async () => {
        const ref = setupFiltered({ id: 'ou-3', term: 'Kabwe' })
        await ready()
        act(() => ref.tree.toggleRevealed('ou-2'))

        await waitFor(() =>
            expect(screen.getByTestId('t-toggle')).toBeInTheDocument()
        )
        expect(screen.getByTestId('t-label')).toHaveClass('result')
        expect(screen.getByTestId('t-match')).toHaveTextContent(/^Kabwe$/)
        expect(screen.queryByTestId('t-reveal')).toBeNull()
    })

    it('gives renderLabel the result and the term', async () => {
        const renderLabel = jest.fn<React.ReactNode, Parameters<RenderLabel>>(
            ({ node }) => <i>{node.displayName}</i>
        )
        const Probe = () => {
            const { getRow, getRowIndex } = useOuTree()
            const index = getRowIndex('ou-3')
            const row = index === undefined ? undefined : getRow(index)
            return row?.kind === 'node' ? (
                <OuTreeNodeRow
                    row={row}
                    renderLabel={renderLabel}
                    dataTest="t"
                />
            ) : null
        }
        const ref: { tree?: TreeState } = {}
        const Grab = () => {
            ref.tree = useTreeState()
            return null
        }
        render(
            <CustomDataProvider
                data={{ [TREE_RESOURCE]: realChildren, [GIST_RESOURCE]: gist }}
            >
                <OuTreeNodeStoreProvider>
                    <OuTreeProvider rootIds={['ou-1']}>
                        <Grab />
                        <Probe />
                    </OuTreeProvider>
                </OuTreeNodeStoreProvider>
            </CustomDataProvider>
        )
        act(() => ref.tree?.search('Kabwe'))
        await ready()

        expect(renderLabel).toHaveBeenLastCalledWith(
            expect.objectContaining({ isResult: true, searchTerm: 'Kabwe' })
        )
    })
})

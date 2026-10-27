import { CustomDataProvider } from '@dhis2/app-runtime'
import '@testing-library/jest-dom'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React, { useEffect } from 'react'
import {
    createGistResolver,
    createTreeResolver,
    zambiaOrgUnits,
} from '../__fixtures__/index'
import * as virtualizerMock from '../__fixtures__/virtualizer-mock'
import { GIST_RESOURCE, TREE_RESOURCE } from '../data/index'
import {
    OuTreeNodeStoreProvider,
    OuTreeProvider,
    useOuTreeActions,
} from '../tree/index'
import { OuTreeList } from './ou-tree-list'
import type { RenderLabel } from './ou-tree-node-row'

jest.mock('@tanstack/react-virtual', () =>
    jest.requireActual('../__fixtures__/virtualizer-mock')
)

const realGist = createGistResolver({ orgUnits: zambiaOrgUnits })
const children = createTreeResolver({ orgUnits: zambiaOrgUnits })

const captured: { actions?: ReturnType<typeof useOuTreeActions> } = {}
const Capture = () => {
    const actions = useOuTreeActions()
    useEffect(() => {
        captured.actions = actions
    }, [actions])
    return null
}

const renderList = ({
    rootIds,
    initiallyOpen,
    gist = realGist,
    renderLabel,
}: {
    rootIds: string[]
    initiallyOpen?: string[]
    gist?: typeof realGist
    renderLabel?: RenderLabel
}) =>
    render(
        <CustomDataProvider
            data={{ [TREE_RESOURCE]: children, [GIST_RESOURCE]: gist }}
        >
            <OuTreeNodeStoreProvider>
                <OuTreeProvider rootIds={rootIds} initiallyOpen={initiallyOpen}>
                    <Capture />
                    <OuTreeList dataTest="t" renderLabel={renderLabel} />
                </OuTreeProvider>
            </OuTreeNodeStoreProvider>
        </CustomDataProvider>
    )

const rowsOfKind = (kind: string) =>
    screen
        .queryAllByTestId('t-row')
        .filter((row) => row.getAttribute('data-row-kind') === kind)
const labels = () =>
    screen.queryAllByTestId('t-label').map((el) => el.firstChild?.textContent)

describe('OuTreeList', () => {
    beforeEach(() => virtualizerMock.measureElement.mockClear())

    it('shows one skeleton row per requested root, then one row per tree row', async () => {
        renderList({ rootIds: ['ou-2', 'ou-13'] })

        expect(screen.getByRole('tree')).toBe(screen.getByTestId('t'))
        expect(rowsOfKind('roots')).toHaveLength(2)
        expect(screen.getAllByTestId('t-skeleton')).toHaveLength(2)
        await waitFor(() => expect(rowsOfKind('node')).toHaveLength(2))

        expect(rowsOfKind('roots')).toHaveLength(0)
        expect(labels()).toEqual(['Central Province', 'Lusaka Province'])
    })

    it('shows error-state skeleton rows with retry when the roots fail', async () => {
        const gist = jest
            .fn()
            .mockRejectedValueOnce(new Error('x'))
            .mockImplementation(realGist) as unknown as typeof realGist
        renderList({ rootIds: ['ou-2', 'ou-13'], gist })

        await waitFor(() =>
            expect(screen.getAllByTestId('t-retry')).toHaveLength(2)
        )
        screen
            .getAllByTestId('t-retry-skeleton')
            .forEach((el) => expect(el).toHaveClass('error'))
        expect(screen.getAllByRole('button', { name: 'Retry' })).toHaveLength(2)
        await userEvent.click(screen.getAllByTestId('t-retry')[0])

        await waitFor(() => expect(rowsOfKind('node')).toHaveLength(2))
    })

    it('renders an empty container for an empty roots list', async () => {
        renderList({ rootIds: [] })
        await act(() => new Promise((resolve) => setTimeout(resolve, 0)))

        expect(screen.queryAllByTestId('t-row')).toHaveLength(0)
        expect(screen.queryAllByTestId('t-skeleton')).toHaveLength(0)
        expect(screen.getByTestId('t')).toBeInTheDocument()
    })

    it('positions, indexes and measures every row element', async () => {
        renderList({
            rootIds: ['ou-1'],
            initiallyOpen: ['ou-1'],
        })
        await waitFor(() =>
            expect(screen.getAllByTestId('t-row')).toHaveLength(3)
        )
        const rows = screen.getAllByTestId('t-row')

        rows.forEach((row, index) => {
            const positioned = row.parentElement as HTMLElement
            expect(positioned).toHaveAttribute('data-index', String(index))
            expect(positioned.style.transform).toBe(
                `translateY(${index * 24}px)`
            )
            expect(virtualizerMock.measureElement).toHaveBeenCalledWith(
                positioned
            )
        })
        expect(
            (rows[0].parentElement?.parentElement as HTMLElement).style.height
        ).toBe('72px')
    })

    it('passes renderLabel to node rows', async () => {
        const renderLabel: RenderLabel = ({ node }) => (
            <i data-test="custom">{node.displayName}!</i>
        )
        renderList({ rootIds: ['ou-1'], renderLabel })

        expect(await screen.findByText('Zambia!')).toBeInTheDocument()
        expect(screen.queryByTestId('t-label')).toBeNull()
    })

    it('does not re-render a node row when another node opens', async () => {
        const renders = new Map<string, number>()
        const renderLabel: RenderLabel = ({ node }) => {
            renders.set(node.id, (renders.get(node.id) ?? 0) + 1)
            return <span>{node.displayName}</span>
        }
        renderList({ rootIds: ['ou-2', 'ou-13'], renderLabel })
        await waitFor(() => expect(rowsOfKind('node')).toHaveLength(2))
        const before = renders.get('ou-13')

        act(() => captured.actions?.open('ou-2'))
        await waitFor(() => expect(rowsOfKind('node')).toHaveLength(4))

        expect(renders.get('ou-13')).toBe(before)
    })

    it('keeps the DOM node of a row below a node that opens', async () => {
        renderList({ rootIds: ['ou-2', 'ou-13'] })
        await waitFor(() => expect(rowsOfKind('node')).toHaveLength(2))
        const before = rowsOfKind('node')[1]
        expect(before).toHaveAttribute('data-id', 'ou-13')

        act(() => captured.actions?.open('ou-2'))
        await waitFor(() => expect(rowsOfKind('node')).toHaveLength(4))

        expect(rowsOfKind('node')[3]).toBe(before)
    })
})

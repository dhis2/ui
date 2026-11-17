import { CustomDataProvider } from '@dhis2/app-runtime'
import '@testing-library/jest-dom'
import {
    act,
    fireEvent,
    render,
    screen,
    waitFor,
    within,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React, { useEffect } from 'react'
import {
    createGistResolver,
    createTreeResolver,
    zambiaOrgUnits,
} from '../__fixtures__'
import * as virtualizerMock from '../__fixtures__/virtualizer-mock'
import { GIST_RESOURCE, TREE_RESOURCE } from '../data'
import {
    OuTreeNodeStoreProvider,
    OuTreeProvider,
    useOuTreeActions,
} from '../tree'
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
    childrenPages = children,
    renderLabel,
}: {
    rootIds: string[]
    initiallyOpen?: string[]
    gist?: typeof realGist
    childrenPages?: typeof children
    renderLabel?: RenderLabel
}) =>
    render(
        <CustomDataProvider
            data={{ [TREE_RESOURCE]: childrenPages, [GIST_RESOURCE]: gist }}
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
        expect(screen.getAllByRole('treeitem', { busy: true })).toHaveLength(2)
        await waitFor(() => expect(rowsOfKind('node')).toHaveLength(2))

        expect(rowsOfKind('roots')).toHaveLength(0)
        expect(labels()).toEqual(['Central Province', 'Lusaka Province'])
    })

    it('shows retry skeleton rows when the roots fail', async () => {
        const gist = jest
            .fn()
            .mockRejectedValueOnce(new Error('x'))
            .mockImplementation(realGist) as unknown as typeof realGist
        renderList({ rootIds: ['ou-2', 'ou-13'], gist })

        await waitFor(() =>
            expect(screen.getAllByTestId('t-retry')).toHaveLength(2)
        )
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

describe('OuTreeList in search mode', () => {
    // The label's text nodes, skipping its style element.
    const names = () =>
        screen.queryAllByTestId('t-label').map((el) =>
            Array.from(el.childNodes)
                .filter((child) => child.nodeName !== 'STYLE')
                .map((child) => child.textContent)
                .join('')
        )

    it('says no results found for a search without results', async () => {
        renderList({ rootIds: ['ou-1'] })
        await waitFor(() => expect(rowsOfKind('node')).toHaveLength(1))

        act(() => captured.actions?.search('zzz'))

        expect(await screen.findByTestId('t-no-results')).toHaveTextContent(
            'No results found'
        )
        expect(screen.queryAllByTestId('t-row')).toHaveLength(0)
    })

    it('shows the search rows while the roots are still loading', async () => {
        const gist = (() => new Promise(() => undefined)) as typeof realGist
        renderList({ rootIds: ['ou-1'], gist })
        expect(rowsOfKind('roots')).toHaveLength(1)

        act(() => captured.actions?.search('Clinic'))

        await waitFor(() => expect(rowsOfKind('node')).toHaveLength(11))
        expect(rowsOfKind('roots')).toHaveLength(0)
    })

    it('reveals a node from its eye into all its children, which open', async () => {
        renderList({ rootIds: ['ou-1'] })
        await waitFor(() => expect(rowsOfKind('node')).toHaveLength(1))
        act(() => captured.actions?.search('Kabwe'))
        await waitFor(() => expect(rowsOfKind('node')).toHaveLength(4))
        expect(screen.queryAllByTestId('t-toggle')).toHaveLength(3)

        // Central Province's eye: both districts, Kabwe's still as the
        // matching branch.
        await userEvent.hover(screen.getAllByTestId('t-row')[1])
        await userEvent.click(screen.getByTestId('t-reveal'))
        await waitFor(() =>
            expect(screen.getAllByTestId('t-toggle')).toHaveLength(4)
        )
        // The first row keeps its eye: a click on the eye focused it.
        expect(names()).toEqual([
            'Zambia',
            'Central Province',
            'Kabwe District',
            'Kabwe Health Centre',
            'Serenje District',
        ])

        // Kabwe District's eye: both its children.
        const kabwe = screen.getAllByTestId('t-row')[2]
        await userEvent.hover(kabwe)
        await userEvent.click(within(kabwe).getByTestId('t-reveal'))
        await waitFor(() => expect(names()).toHaveLength(6))
        expect(names().slice(2, 5)).toEqual([
            'Kabwe District',
            'Chisembe Clinic',
            'Kabwe Health Centre',
        ])
    })

    it('collapses a matching ancestor from its arrow and opens it again', async () => {
        renderList({ rootIds: ['ou-1'] })
        await waitFor(() => expect(rowsOfKind('node')).toHaveLength(1))
        act(() => captured.actions?.search('Kabwe'))
        await waitFor(() => expect(rowsOfKind('node')).toHaveLength(4))

        await userEvent.click(screen.getAllByTestId('t-toggle')[1])
        expect(names()).toEqual(['Zambia', 'Central Province'])

        await userEvent.click(screen.getAllByTestId('t-toggle')[1])
        expect(names()).toHaveLength(4)
    })
})

describe('OuTreeList keyboard', () => {
    const tree = () => screen.getByRole('tree')
    const active = () =>
        document.getElementById(
            tree().getAttribute('aria-activedescendant') ?? ''
        )
    const press = (key: string, options: { shiftKey?: boolean } = {}) =>
        fireEvent.keyDown(document.activeElement ?? tree(), {
            key,
            ...options,
        })
    const focusTree = () => act(() => tree().focus())

    beforeEach(() => virtualizerMock.scrollToIndex.mockClear())

    it('is one tab stop whose focus lands on the first visible row', async () => {
        renderList({ rootIds: ['ou-1'], initiallyOpen: ['ou-1'] })
        await waitFor(() => expect(rowsOfKind('node')).toHaveLength(3))

        expect(tree()).toHaveAttribute('tabindex', '0')
        expect(tree()).not.toHaveAttribute('aria-activedescendant')
        focusTree()

        expect(active()).toBe(rowsOfKind('node')[0])
        expect(active()).toHaveClass('focused')
        act(() => tree().blur())
        expect(rowsOfKind('node')[0]).not.toHaveClass('focused')
    })

    it('moves the active row with the arrow keys, Home and End, and stays at the ends', async () => {
        renderList({ rootIds: ['ou-1'], initiallyOpen: ['ou-1'] })
        await waitFor(() => expect(rowsOfKind('node')).toHaveLength(3))
        focusTree()
        const rows = rowsOfKind('node')

        expect(press('ArrowDown')).toBe(false)
        expect(active()).toBe(rows[1])
        press('End')
        expect(active()).toBe(rows[2])
        press('ArrowDown')
        expect(active()).toBe(rows[2])
        press('Home')
        expect(active()).toBe(rows[0])
        press('ArrowUp')
        expect(active()).toBe(rows[0])
        expect(virtualizerMock.scrollToIndex).toHaveBeenCalledWith(1, {
            align: 'auto',
        })
    })

    it('Right opens a closed node and then moves into it; Left closes an open node and then moves to the parent', async () => {
        renderList({ rootIds: ['ou-1'] })
        await waitFor(() => expect(rowsOfKind('node')).toHaveLength(1))
        focusTree()

        press('ArrowRight')
        await waitFor(() => expect(rowsOfKind('node')).toHaveLength(3))
        expect(active()).toBe(rowsOfKind('node')[0])
        press('ArrowRight')
        expect(active()).toBe(rowsOfKind('node')[1])
        press('ArrowRight')
        await waitFor(() =>
            expect(rowsOfKind('node').length).toBeGreaterThan(3)
        )
        expect(active()).toBe(rowsOfKind('node')[1])

        press('ArrowLeft')
        expect(rowsOfKind('node')).toHaveLength(3)
        expect(active()).toBe(rowsOfKind('node')[1])
        press('ArrowLeft')
        expect(active()).toBe(rowsOfKind('node')[0])
        press('ArrowLeft')
        expect(rowsOfKind('node')).toHaveLength(1)
        press('ArrowLeft')
        expect(active()).toBe(rowsOfKind('node')[0])
    })

    it('Enter toggles the active node and Space does nothing but stay put', async () => {
        renderList({ rootIds: ['ou-1'], initiallyOpen: ['ou-1'] })
        await waitFor(() => expect(rowsOfKind('node')).toHaveLength(3))
        focusTree()

        press('Enter')
        expect(rowsOfKind('node')).toHaveLength(1)
        press('Enter')
        expect(rowsOfKind('node')).toHaveLength(3)
        expect(press(' ')).toBe(false)
        expect(rowsOfKind('node')).toHaveLength(3)
    })

    it("Shift+Enter focuses the row's first control, Tab cycles within the row, Escape returns to the tree", async () => {
        renderList({ rootIds: ['ou-1'] })
        await waitFor(() => expect(rowsOfKind('node')).toHaveLength(1))
        act(() => captured.actions?.search('Clinic'))
        await waitFor(() => expect(rowsOfKind('node')).toHaveLength(11))
        focusTree()
        press('ArrowDown')
        expect(active()).toBe(rowsOfKind('node')[1])
        const eye = screen.getByTestId('t-reveal')

        press('Enter', { shiftKey: true })
        expect(document.activeElement).toBe(eye)
        expect(press('Tab')).toBe(false)
        expect(document.activeElement).toBe(eye)
        press('Escape')
        expect(document.activeElement).toBe(tree())
        expect(active()).toBe(rowsOfKind('node')[1])
    })

    it('an arrow pressed inside a row returns to the tree and moves', async () => {
        renderList({ rootIds: ['ou-1'] })
        await waitFor(() => expect(rowsOfKind('node')).toHaveLength(1))
        act(() => captured.actions?.search('Clinic'))
        await waitFor(() => expect(rowsOfKind('node')).toHaveLength(11))
        focusTree()
        press('ArrowDown')
        press('Enter', { shiftKey: true })
        expect(document.activeElement).toBe(screen.getByTestId('t-reveal'))

        press('ArrowDown')

        expect(document.activeElement).toBe(tree())
        expect(active()).toBe(rowsOfKind('node')[2])
    })

    it('clicking a row makes it the active row', async () => {
        renderList({ rootIds: ['ou-1'], initiallyOpen: ['ou-1'] })
        await waitFor(() => expect(rowsOfKind('node')).toHaveLength(3))

        await userEvent.click(screen.getAllByTestId('t-label')[2])

        expect(document.activeElement).toBe(tree())
        expect(active()).toBe(rowsOfKind('node')[2])
        expect(rowsOfKind('node')[2]).toHaveClass('focused')
    })

    it('Left and Right pressed inside a row return to the tree and act', async () => {
        renderList({ rootIds: ['ou-1'] })
        await waitFor(() => expect(rowsOfKind('node')).toHaveLength(1))
        act(() => captured.actions?.search('Clinic'))
        await waitFor(() => expect(rowsOfKind('node')).toHaveLength(11))
        focusTree()
        press('ArrowDown')
        press('Enter', { shiftKey: true })
        expect(document.activeElement).toBe(screen.getByTestId('t-reveal'))

        expect(press('ArrowLeft')).toBe(false)

        expect(document.activeElement).toBe(tree())
        expect(active()).toHaveAttribute('aria-expanded', 'false')
    })

    it('does not trap Tab on a control that is in the tab order, such as the roots retry', async () => {
        const gist = jest
            .fn()
            .mockRejectedValueOnce(new Error('x'))
            .mockImplementation(realGist) as unknown as typeof realGist
        renderList({ rootIds: ['ou-1'], gist })
        const retry = await screen.findByTestId('t-retry')
        act(() => retry.focus())

        expect(fireEvent.keyDown(retry, { key: 'Tab' })).toBe(true)
        expect(fireEvent.keyDown(retry, { key: 'Tab', shiftKey: true })).toBe(
            true
        )
    })

    it('Down with the tree focused but no active row starts at the first visible row', async () => {
        const gist = jest
            .fn()
            .mockImplementation(
                (...args: Parameters<typeof realGist>) =>
                    new Promise((resolve) =>
                        setTimeout(() => resolve(realGist(...args)), 20)
                    )
            ) as unknown as typeof realGist
        renderList({ rootIds: ['ou-1'], initiallyOpen: ['ou-1'], gist })
        focusTree()
        expect(tree()).not.toHaveAttribute('aria-activedescendant')
        await waitFor(() => expect(rowsOfKind('node')).toHaveLength(3))

        press('ArrowDown')

        expect(active()).toBe(rowsOfKind('node')[0])
    })

    it('Enter on an error row retries its page', async () => {
        // Pages of two (the store takes the page size from the pager), the
        // second page of Serenje failing.
        const failingPageTwo: typeof children = (type, query) => {
            const params: Record<string, unknown> = {
                ...(query.params as Record<string, unknown>),
                pageSize: 2,
            }
            return query.id === 'ou-6/children' && Number(params.page) === 2
                ? Promise.reject(new Error('x'))
                : children(type, { ...query, params })
        }
        renderList({
            rootIds: ['ou-6'],
            initiallyOpen: ['ou-6'],
            childrenPages: failingPageTwo,
        })
        await waitFor(() =>
            expect(rowsOfKind('children-error').length).toBeGreaterThan(0)
        )
        const retry = jest.spyOn(captured.actions!.store, 'retryChildrenPage')
        focusTree()
        act(() => captured.actions?.setFocused('children-error:ou-6:2'))
        expect(active()).toBe(rowsOfKind('children-error')[0])

        press('Enter')

        expect(retry).toHaveBeenCalledWith('ou-6', 2)
    })
})

import { zambiaOrgUnits } from '../__fixtures__/index'
import type { StoredNode } from '../node-store/index'
import { addResults, createPrunedTree, type PrunedTree } from './pruned-tree'

const nodes = new Map<string, StoredNode>(
    zambiaOrgUnits.map(({ id, name, path, level }) => [
        id,
        { id, displayName: name, path, level, leaf: false },
    ])
)
const store = { getNode: (id: string) => nodes.get(id) }
const result = (id: string) => ({ id, path: nodes.get(id)?.path ?? '' })
const children = (pruned: PrunedTree) =>
    Object.fromEntries(pruned.children.entries())

describe('addResults', () => {
    it('appends ancestors and results in arrival order', () => {
        const pruned = createPrunedTree()

        // Chisembe Clinic under Kabwe District, Kanona Clinic under Serenje.
        const unplaced = addResults({
            pruned,
            results: [result('ou-5'), result('ou-8')],
            shownRootIds: new Set(['ou-1']),
            store,
        })

        expect(unplaced).toEqual([])
        expect(pruned.roots).toEqual(['ou-1'])
        expect(children(pruned)).toEqual({
            'ou-1': ['ou-2'],
            'ou-2': ['ou-3', 'ou-6'],
            'ou-3': ['ou-5'],
            'ou-6': ['ou-8'],
        })
        expect([...pruned.placed].sort()).toEqual(
            ['ou-1', 'ou-2', 'ou-3', 'ou-5', 'ou-6', 'ou-8'].sort()
        )
    })

    it('places a sibling needed by a later result after one needed earlier', () => {
        const pruned = createPrunedTree()

        // Kanona Clinic under Central, then Kafue Clinic under Lusaka.
        addResults({
            pruned,
            results: [result('ou-8'), result('ou-15')],
            shownRootIds: new Set(['ou-1']),
            store,
        })

        expect(pruned.children.get('ou-1')).toEqual(['ou-2', 'ou-13'])
    })

    it('nests a later result under an earlier result that is its ancestor', () => {
        const pruned = createPrunedTree()

        // Kabwe District, then Kabwe Health Centre inside it.
        addResults({
            pruned,
            results: [result('ou-3'), result('ou-4')],
            shownRootIds: new Set(['ou-1']),
            store,
        })

        expect(pruned.children.get('ou-2')).toEqual(['ou-3'])
        expect(pruned.children.get('ou-3')).toEqual(['ou-4'])
    })

    it('starts at the first shown root in the path and skips ids above it', () => {
        const pruned = createPrunedTree()

        addResults({
            pruned,
            results: [result('ou-5')],
            shownRootIds: new Set(['ou-2']),
            store,
        })

        expect(pruned.roots).toEqual(['ou-2'])
        expect(children(pruned)).toEqual({
            'ou-2': ['ou-3'],
            'ou-3': ['ou-5'],
        })
    })

    it('places a result that is itself a shown root', () => {
        const pruned = createPrunedTree()

        addResults({
            pruned,
            results: [result('ou-1')],
            shownRootIds: new Set(['ou-1']),
            store,
        })

        expect(pruned.roots).toEqual(['ou-1'])
        expect(children(pruned)).toEqual({})
    })

    it('returns results it cannot place and leaves the tree as it was', () => {
        const pruned = createPrunedTree()
        addResults({
            pruned,
            results: [result('ou-8')],
            shownRootIds: new Set(['ou-1']),
            store,
        })
        const before = {
            roots: [...pruned.roots],
            children: children(pruned),
            placed: [...pruned.placed],
        }

        const noRoot = addResults({
            pruned,
            results: [result('ou-15')],
            shownRootIds: new Set(['ou-2']),
            store,
        })
        const missingAncestor = addResults({
            pruned,
            results: [{ id: 'ou-5', path: '/ou-1/ou-2/ou-x/ou-5' }],
            shownRootIds: new Set(['ou-1']),
            store,
        })

        expect(noRoot).toEqual(['ou-15'])
        expect(missingAncestor).toEqual(['ou-5'])
        expect({
            roots: pruned.roots,
            children: children(pruned),
            placed: [...pruned.placed],
        }).toEqual(before)
    })
})

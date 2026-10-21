import { createTestTreeApi, pahoOrgUnits } from '../__fixtures__/index'
import { createNodeCache } from '../cache/index'
import { createTreeState } from './tree-state'

const flush = () => new Promise((resolve) => setTimeout(resolve, 0))
const MINAS_GERAIS = 'IsBNuUZU5zm'

describe('tree state over the PAHO stand-in', () => {
    it('loads all 18 pages of the widest parent through ensureChildrenLoaded', async () => {
        const { api, treeCalls } = createTestTreeApi(pahoOrgUnits)
        const cache = createNodeCache({ api })
        const tree = createTreeState({ cache, roots: [MINAS_GERAIS] })
        tree.start()
        await flush()
        tree.open(MINAS_GERAIS)
        await flush()

        expect(tree.getRowCount()).toBe(854)
        tree.ensureChildrenLoaded(0, tree.getRowCount() - 1)
        await flush()

        expect(treeCalls).toHaveLength(18)
        expect(tree.getRowCount()).toBe(854)
        const names = Array.from({ length: 853 }, (_, index) => {
            const row = tree.getRow(index + 1)
            return row.kind === 'node'
                ? cache.getNode(row.id)?.displayName
                : row.kind
        })
        expect(names.slice(0, 3)).toEqual([
            'Abadia dos Dourados',
            'Abaete',
            'Abre Campo',
        ])
        expect(names).toEqual(
            [...names].sort((a, b) => String(a).localeCompare(String(b), 'en'))
        )
    })
})

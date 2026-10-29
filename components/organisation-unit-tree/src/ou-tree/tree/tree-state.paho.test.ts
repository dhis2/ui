import { createTestTreeApi, pahoOrgUnits } from '../__fixtures__/index'
import { createNodeStore } from '../node-store/index'
import { createTreeState } from './tree-state'

const flush = () => new Promise((resolve) => setTimeout(resolve, 0))
const AMR = 'nOsaOsg36TR'
const CAR = 'eFkh5oWtyud'
const MINAS_GERAIS = 'IsBNuUZU5zm'

describe('tree state over the PAHO stand-in', () => {
    it('loads all 18 pages of the widest parent through ensureChildrenLoaded', async () => {
        const { api, childrenCalls } = createTestTreeApi(pahoOrgUnits)
        const store = createNodeStore({ api })
        const tree = createTreeState({ store, rootIds: [MINAS_GERAIS] })
        tree.loadInitial()
        await flush()
        tree.open(MINAS_GERAIS)
        await flush()

        expect(tree.getRowCount()).toBe(854)
        tree.ensureChildrenLoaded(0, tree.getRowCount() - 1)
        await flush()

        expect(childrenCalls).toHaveLength(18)
        expect(tree.getRowCount()).toBe(854)
        const names = Array.from({ length: 853 }, (_, index) => {
            const row = tree.getRow(index + 1)
            return row.kind === 'node'
                ? store.getNode(row.id)?.displayName
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

    it('prunes a search to the matching branches under their ancestors', async () => {
        const { api } = createTestTreeApi(pahoOrgUnits)
        const store = createNodeStore({ api })
        const tree = createTreeState({ store, rootIds: [AMR, CAR] })
        tree.loadInitial()
        await flush()

        // The state of Rio de Janeiro and the municipality inside it.
        tree.search('rio de jan')
        await flush()

        expect(tree.getRowCount()).toBe(4)
        const seen = Array.from({ length: 4 }, (_, index) => {
            const row = tree.getRow(index)
            return row.kind === 'node'
                ? `${store.getNode(row.id)?.displayName}${row.result ? '*' : ''}`
                : row.kind
        })
        expect(seen).toEqual([
            'AMR',
            'Brazil',
            'Rio de Janeiro*',
            'Rio de Janeiro*',
        ])
    })
})

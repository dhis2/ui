import { rowKey } from './row-key'

describe('rowKey', () => {
    it('is the id for a node row', () => {
        expect(
            rowKey(
                {
                    kind: 'node',
                    id: 'ou-1',
                    depth: 0,
                    children: { status: 'none' },
                },
                4
            )
        ).toBe('ou-1')
    })

    it('names the parent and slot of a skeleton row', () => {
        expect(
            rowKey(
                { kind: 'skeleton', parentId: 'ou-1', index: 7, depth: 1 },
                4
            )
        ).toBe('skeleton:ou-1:7')
    })

    it('names the parent, page and row index of an error row', () => {
        expect(
            rowKey(
                {
                    kind: 'error',
                    parentId: 'ou-1',
                    page: 2,
                    error: new Error('x'),
                    depth: 1,
                },
                4
            )
        ).toBe('error:ou-1:2:4')
    })
})

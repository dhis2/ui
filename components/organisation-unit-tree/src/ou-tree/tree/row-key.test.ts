import { rowKey } from './row-key'

describe('rowKey', () => {
    it('is the id for a node row', () => {
        expect(
            rowKey({
                kind: 'node',
                id: 'ou-1',
                depth: 0,
                children: { status: 'none' },
                view: 'full',
                result: false,
            })
        ).toBe('ou-1')
    })

    it('names the parent and slot of a skeleton row', () => {
        expect(
            rowKey({
                kind: 'children-skeleton',
                parentId: 'ou-1',
                index: 7,
                depth: 1,
            })
        ).toBe('children-skeleton:ou-1:7')
    })

    it('names the parent and slot of an error row', () => {
        expect(
            rowKey({
                kind: 'children-error',
                parentId: 'ou-1',
                index: 7,
                page: 2,
                error: new Error('x'),
                depth: 1,
            })
        ).toBe('children-error:ou-1:7')
    })

    it('names the result index of a result placeholder', () => {
        expect(rowKey({ kind: 'result-skeleton', index: 7, depth: 1 })).toBe(
            'result-skeleton:7'
        )
        expect(
            rowKey({
                kind: 'result-error',
                index: 7,
                page: 2,
                error: new Error('x'),
                depth: 1,
            })
        ).toBe('result-error:7')
    })
})

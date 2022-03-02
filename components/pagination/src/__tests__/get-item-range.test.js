import * as mockPagers from '../__fixtures__/index.js'
import { getItemRange } from '../get-item-range.js'

describe('getItemRange', () => {
    it('calculates the firstItem and lastItem correctly', () => {
        const { page, pageSize, total } = mockPagers.atTenthPage
        const { firstItem, lastItem } = getItemRange({
            page,
            pageSize,
            total,
        })

        expect(firstItem).toEqual(451)
        expect(lastItem).toEqual(500)
    })

    it('returns 0 for firstItem and lastItem if the total is 0', () => {
        const { firstItem, lastItem } = getItemRange({
            page: 1,
            pageSize: 50,
            total: 0,
        })

        expect(firstItem).toEqual(0)
        expect(lastItem).toEqual(0)
    })

    it('uses the total count as lastItem when the last page is reached', () => {
        const { page, pageSize, total } = mockPagers.atLastPage
        const { lastItem } = getItemRange({ page, pageSize, total })

        expect(lastItem).toEqual(total)
    })

    it('handles pagers without totals', () => {
        const { firstItem, lastItem } = getItemRange({
            page: 3,
            pageSize: 50,
        })

        expect(firstItem).toEqual(101)
        expect(lastItem).toEqual(150)
    })

    it('bases the lastItem on the pageLength for pagers without total when the last page is reached', () => {
        const { lastItem } = getItemRange({
            page: 3,
            pageSize: 50,
            pageLength: 21,
            isLastPage: true,
        })

        expect(lastItem).toEqual(121)
    })

    it('sets lastItem to NaN when on the last page and there is no total or pageLength', () => {
        const { lastItem } = getItemRange({
            page: 3,
            pageSize: 50,
            isLastPage: true,
        })

        expect(lastItem).toEqual(NaN)
    })
})

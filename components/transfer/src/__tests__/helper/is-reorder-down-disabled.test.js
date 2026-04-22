import { isReorderDownDisabled } from '../../transfer/is-reorder-down-disabled.js'

describe('Transfer - isReorderDownDisabled', () => {
    const selected = ['foo', 'bar', 'baz']

    it('should return true when there are no highlighted picked options', () => {
        const actual = isReorderDownDisabled({
            highlightedPickedOptions: [],
            selected,
        })

        expect(actual).toBe(true)
    })

    it('should return true if the last picked option is the only highlighted one', () => {
        const actual = isReorderDownDisabled({
            highlightedPickedOptions: ['baz'],
            selected,
        })

        expect(actual).toBe(true)
    })

    it('should return false when one picked option is highlighted which is not the last one', () => {
        const actual = isReorderDownDisabled({
            highlightedPickedOptions: ['bar'],
            selected,
        })

        expect(actual).toBe(false)
    })

    it('should return false for a contiguous multi-select not flush to the bottom', () => {
        const actual = isReorderDownDisabled({
            highlightedPickedOptions: ['foo', 'bar'],
            selected,
        })

        expect(actual).toBe(false)
    })

    it('should return true for a contiguous multi-select flush to the bottom', () => {
        const actual = isReorderDownDisabled({
            highlightedPickedOptions: ['bar', 'baz'],
            selected,
        })

        expect(actual).toBe(true)
    })

    it('should return true when all items are highlighted', () => {
        const actual = isReorderDownDisabled({
            highlightedPickedOptions: ['foo', 'bar', 'baz'],
            selected,
        })

        expect(actual).toBe(true)
    })

    it('should return false for a non-contiguous selection containing the last item', () => {
        const actual = isReorderDownDisabled({
            highlightedPickedOptions: ['foo', 'baz'],
            selected,
        })

        expect(actual).toBe(false)
    })

    it('should ignore highlighted values that do not exist in selected', () => {
        const actual = isReorderDownDisabled({
            highlightedPickedOptions: ['ghost', 'foo'],
            selected,
        })

        expect(actual).toBe(false)
    })

    it('should return true when all highlighted values are missing from selected', () => {
        const actual = isReorderDownDisabled({
            highlightedPickedOptions: ['ghost'],
            selected,
        })

        expect(actual).toBe(true)
    })

    it('should return true when a filter is active on the picked side', () => {
        const actual = isReorderDownDisabled({
            highlightedPickedOptions: ['foo'],
            selected,
            filterActivePicked: true,
        })

        expect(actual).toBe(true)
    })
})

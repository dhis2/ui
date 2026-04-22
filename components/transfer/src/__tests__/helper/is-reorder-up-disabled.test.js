import { isReorderUpDisabled } from '../../transfer/is-reorder-up-disabled.js'

describe('Transfer - isReorderUpDisabled', () => {
    const selected = ['foo', 'bar', 'baz']

    it('should return true when there are no highlighted picked options', () => {
        const actual = isReorderUpDisabled({
            highlightedPickedOptions: [],
            selected,
        })

        expect(actual).toBe(true)
    })

    it('should return true if the first picked option is the only highlighted one', () => {
        const actual = isReorderUpDisabled({
            highlightedPickedOptions: ['foo'],
            selected,
        })

        expect(actual).toBe(true)
    })

    it('should return false when one picked option is highlighted which is not the first one', () => {
        const actual = isReorderUpDisabled({
            highlightedPickedOptions: ['baz'],
            selected,
        })

        expect(actual).toBe(false)
    })

    it('should return false for a contiguous multi-select not flush to the top', () => {
        const actual = isReorderUpDisabled({
            highlightedPickedOptions: ['bar', 'baz'],
            selected,
        })

        expect(actual).toBe(false)
    })

    it('should return true for a contiguous multi-select flush to the top', () => {
        const actual = isReorderUpDisabled({
            highlightedPickedOptions: ['foo', 'bar'],
            selected,
        })

        expect(actual).toBe(true)
    })

    it('should return true when all items are highlighted', () => {
        const actual = isReorderUpDisabled({
            highlightedPickedOptions: ['foo', 'bar', 'baz'],
            selected,
        })

        expect(actual).toBe(true)
    })

    it('should return false for a non-contiguous selection containing the first item', () => {
        const actual = isReorderUpDisabled({
            highlightedPickedOptions: ['foo', 'baz'],
            selected,
        })

        expect(actual).toBe(false)
    })

    it('should ignore highlighted values that do not exist in selected', () => {
        const actual = isReorderUpDisabled({
            highlightedPickedOptions: ['ghost', 'baz'],
            selected,
        })

        expect(actual).toBe(false)
    })

    it('should return true when all highlighted values are missing from selected', () => {
        const actual = isReorderUpDisabled({
            highlightedPickedOptions: ['ghost'],
            selected,
        })

        expect(actual).toBe(true)
    })

    it('should return true when a filter is active on the picked side', () => {
        const actual = isReorderUpDisabled({
            highlightedPickedOptions: ['baz'],
            selected,
            filterActivePicked: true,
        })

        expect(actual).toBe(true)
    })
})

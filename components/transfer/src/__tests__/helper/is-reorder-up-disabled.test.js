import { isReorderUpDisabled } from '../../transfer/is-reorder-up-disabled.js'

describe('Transfer - isReorderUpDisabled', () => {
    const selected = ['foo', 'bar', 'baz']

    it('should return true when there are no highlighted picked options', () => {
        const highlightedPickedOptions = []
        const actual = isReorderUpDisabled({
            highlightedPickedOptions,
            selected,
        })

        expect(actual).toBe(true)
    })

    it('should return true when there are multiple highlighted picked options', () => {
        const highlightedPickedOptions = ['bar', 'baz']
        const actual = isReorderUpDisabled({
            highlightedPickedOptions,
            selected,
        })

        expect(actual).toBe(true)
    })

    it('should return true if the first picked option is highlighted', () => {
        const highlightedPickedOptions = ['foo']

        const actual = isReorderUpDisabled({
            highlightedPickedOptions,
            selected,
        })

        expect(actual).toBe(true)
    })

    it('should return false when one picked option is highlighted which is not the last one', () => {
        const highlightedPickedOptions = ['baz']

        const actual = isReorderUpDisabled({
            highlightedPickedOptions,
            selected,
        })

        expect(actual).toBe(false)
    })
})

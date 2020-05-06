import { isReorderDownDisabled } from '../../../Transfer/Transfer/isReorderDownDisabled.js'

describe('Transfer - isReorderDownDisabled', () => {
    const selected = ['foo', 'bar', 'baz']

    it('should return true when there are no highlighted picked options', () => {
        const highlightedPickedOptions = []
        const actual = isReorderDownDisabled({
            highlightedPickedOptions,
            selected,
        })

        expect(actual).toBe(true)
    })

    it('should return true when there are multiple highlighted picked options', () => {
        const highlightedPickedOptions = ['bar', 'foo']
        const actual = isReorderDownDisabled({
            highlightedPickedOptions,
            selected,
        })

        expect(actual).toBe(true)
    })

    it('should return true if the last picked option is highlighted', () => {
        const highlightedPickedOptions = ['baz']

        const actual = isReorderDownDisabled({
            highlightedPickedOptions,
            selected,
        })

        expect(actual).toBe(true)
    })

    it('should return false when one picked option is highlighted which is not the last one', () => {
        const highlightedPickedOptions = ['bar']

        const actual = isReorderDownDisabled({
            highlightedPickedOptions,
            selected,
        })

        expect(actual).toBe(false)
    })
})

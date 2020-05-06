import { isReorderDownDisabled } from '../../../Transfer/helper/isReorderDownDisabled.js'

describe('Transfer - isReorderDownDisabled', () => {
    const selectedOptions = [
        { label: 'Foo', value: 'foo' },
        { label: 'Bar', value: 'bar' },
        { label: 'Baz', value: 'baz' },
    ]

    it('should return true when there are no highlighted picked options', () => {
        const highlightedPickedOptions = []
        const actual = isReorderDownDisabled({
            highlightedPickedOptions,
            selectedOptions,
        })

        expect(actual).toBe(true)
    })

    it('should return true when there are multiple highlighted picked options', () => {
        const highlightedPickedOptions = [
            { label: 'Bar', value: 'bar' },
            { label: 'Baz', value: 'baz' },
        ]
        const actual = isReorderDownDisabled({
            highlightedPickedOptions,
            selectedOptions,
        })

        expect(actual).toBe(true)
    })

    it('should return true if the last picked option is highlighted', () => {
        const highlightedPickedOptions = [{ label: 'Baz', value: 'baz' }]

        const actual = isReorderDownDisabled({
            highlightedPickedOptions,
            selectedOptions,
        })

        expect(actual).toBe(true)
    })

    it('should return false when one picked option is highlighted which is not the last one', () => {
        const highlightedPickedOptions = [{ label: 'Bar', value: 'bar' }]

        const actual = isReorderDownDisabled({
            highlightedPickedOptions,
            selectedOptions,
        })

        expect(actual).toBe(false)
    })
})

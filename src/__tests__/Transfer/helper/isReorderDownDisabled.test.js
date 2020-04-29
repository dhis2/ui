import { isReorderDownDisabled } from '../../../Transfer/helper/isReorderDownDisabled'

describe('Transfer - isReorderDownDisabled', () => {
    const selectedPlainOptions = [
        { label: 'Foo', value: 'foo' },
        { label: 'Bar', value: 'bar' },
        { label: 'Baz', value: 'baz' },
    ]

    it('should return true when there are no highlighted picked options', () => {
        const highlightedPickedPlainOptions = []
        const actual = isReorderDownDisabled({
            highlightedPickedPlainOptions,
            selectedPlainOptions,
        })

        expect(actual).toBe(true)
    })

    it('should return true when there are multiple highlighted picked options', () => {
        const highlightedPickedPlainOptions = [
            { label: 'Bar', value: 'bar' },
            { label: 'Baz', value: 'baz' },
        ]
        const actual = isReorderDownDisabled({
            highlightedPickedPlainOptions,
            selectedPlainOptions,
        })

        expect(actual).toBe(true)
    })

    it('should return true if the last picked option is highlighted', () => {
        const highlightedPickedPlainOptions = [{ label: 'Baz', value: 'baz' }]

        const actual = isReorderDownDisabled({
            highlightedPickedPlainOptions,
            selectedPlainOptions,
        })

        expect(actual).toBe(true)
    })

    it('should return false when one picked option is highlighted which is not the last one', () => {
        const highlightedPickedPlainOptions = [{ label: 'Bar', value: 'bar' }]

        const actual = isReorderDownDisabled({
            highlightedPickedPlainOptions,
            selectedPlainOptions,
        })

        expect(actual).toBe(false)
    })
})

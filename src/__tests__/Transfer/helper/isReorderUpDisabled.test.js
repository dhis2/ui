import { isReorderUpDisabled } from '../../../Transfer/helper/isReorderUpDisabled'

describe('Transfer - isReorderUpDisabled', () => {
    const selectedPlainOptions = [
        { label: 'Foo', value: 'foo' },
        { label: 'Bar', value: 'bar' },
        { label: 'Baz', value: 'baz' },
    ]

    it('should return true when there are no highlighted picked options', () => {
        const highlightedPickedPlainOptions = []
        const actual = isReorderUpDisabled({
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
        const actual = isReorderUpDisabled({
            highlightedPickedPlainOptions,
            selectedPlainOptions,
        })

        expect(actual).toBe(true)
    })

    it('should return true if the first picked option is highlighted', () => {
        const highlightedPickedPlainOptions = [{ label: 'Foo', value: 'foo' }]

        const actual = isReorderUpDisabled({
            highlightedPickedPlainOptions,
            selectedPlainOptions,
        })

        expect(actual).toBe(true)
    })

    it('should return false when one picked option is highlighted which is not the last one', () => {
        const highlightedPickedPlainOptions = [{ label: 'Baz', value: 'baz' }]

        const actual = isReorderUpDisabled({
            highlightedPickedPlainOptions,
            selectedPlainOptions,
        })

        expect(actual).toBe(false)
    })
})

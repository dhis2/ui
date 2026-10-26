import { getDraggedValues } from '../../transfer/get-dragged-values.js'

describe('Transfer - getDraggedValues', () => {
    const visibleOptions = [
        { label: 'A', value: 'a' },
        { label: 'B', value: 'b' },
        { label: 'C', value: 'c' },
        { label: 'D', value: 'd' },
    ]

    it('should return only the dragged value when it is not highlighted', () => {
        expect(
            getDraggedValues({
                draggedValue: 'b',
                highlightedOptions: ['c', 'd'],
                visibleOptions,
            })
        ).toEqual(['b'])
    })

    it('should return only the dragged value when nothing is highlighted', () => {
        expect(
            getDraggedValues({
                draggedValue: 'b',
                highlightedOptions: [],
                visibleOptions,
            })
        ).toEqual(['b'])
    })

    it('should return the whole highlighted set when the dragged value is highlighted', () => {
        expect(
            getDraggedValues({
                draggedValue: 'c',
                highlightedOptions: ['a', 'c'],
                visibleOptions,
            })
        ).toEqual(['a', 'c'])
    })

    it('should order the dragged values by list order, not highlight order', () => {
        expect(
            getDraggedValues({
                draggedValue: 'a',
                highlightedOptions: ['d', 'a', 'b'],
                visibleOptions,
            })
        ).toEqual(['a', 'b', 'd'])
    })

    it('should exclude highlighted values that are not visible (hidden by a filter)', () => {
        expect(
            getDraggedValues({
                draggedValue: 'a',
                highlightedOptions: ['a', 'hidden-by-filter'],
                visibleOptions,
            })
        ).toEqual(['a'])
    })
})

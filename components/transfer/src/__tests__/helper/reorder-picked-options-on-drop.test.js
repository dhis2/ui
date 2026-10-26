import { reorderPickedOptionsOnDrop } from '../../transfer/reorder-picked-options-on-drop.js'

describe('Transfer - reorderPickedOptionsOnDrop', () => {
    const onChange = jest.fn()

    afterEach(() => {
        onChange.mockClear()
    })

    it('should move a single option down', () => {
        reorderPickedOptionsOnDrop({
            selected: ['a', 'b', 'c', 'd'],
            draggedValues: ['a'],
            dropIndex: 3,
            onChange,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['b', 'c', 'a', 'd'],
        })
    })

    it('should move a single option up', () => {
        reorderPickedOptionsOnDrop({
            selected: ['a', 'b', 'c', 'd'],
            draggedValues: ['c'],
            dropIndex: 1,
            onChange,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['a', 'c', 'b', 'd'],
        })
    })

    it('should move an option to the very top', () => {
        reorderPickedOptionsOnDrop({
            selected: ['a', 'b', 'c'],
            draggedValues: ['c'],
            dropIndex: 0,
            onChange,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['c', 'a', 'b'],
        })
    })

    it('should move an option to the very end', () => {
        reorderPickedOptionsOnDrop({
            selected: ['a', 'b', 'c'],
            draggedValues: ['a'],
            dropIndex: 3,
            onChange,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['b', 'c', 'a'],
        })
    })

    it('should move a contiguous block as a group', () => {
        reorderPickedOptionsOnDrop({
            selected: ['a', 'b', 'c', 'd', 'e'],
            draggedValues: ['b', 'c'],
            dropIndex: 5,
            onChange,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['a', 'd', 'e', 'b', 'c'],
        })
    })

    it('should collapse a non-contiguous selection into a contiguous block at the drop position', () => {
        reorderPickedOptionsOnDrop({
            selected: ['a', 'b', 'c', 'd', 'e'],
            draggedValues: ['a', 'd'],
            dropIndex: 3,
            onChange,
        })

        // 'a' and 'd' are removed, insertion index 3 adjusted by the
        // one dragged item ('a') above it -> lands after 'c'
        expect(onChange).toHaveBeenCalledWith({
            selected: ['b', 'c', 'a', 'd', 'e'],
        })
    })

    it('should preserve list order of dragged values regardless of input order', () => {
        reorderPickedOptionsOnDrop({
            selected: ['a', 'b', 'c', 'd', 'e'],
            draggedValues: ['d', 'b'],
            dropIndex: 0,
            onChange,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['b', 'd', 'a', 'c', 'e'],
        })
    })

    it('should not call onChange when the drop results in no change', () => {
        reorderPickedOptionsOnDrop({
            selected: ['a', 'b', 'c'],
            draggedValues: ['b'],
            dropIndex: 1,
            onChange,
        })

        expect(onChange).toHaveBeenCalledTimes(0)
    })

    it('should not call onChange when dropping right below the dragged option', () => {
        reorderPickedOptionsOnDrop({
            selected: ['a', 'b', 'c'],
            draggedValues: ['b'],
            dropIndex: 2,
            onChange,
        })

        expect(onChange).toHaveBeenCalledTimes(0)
    })

    it('should not call onChange when no dragged value exists in selected', () => {
        reorderPickedOptionsOnDrop({
            selected: ['a', 'b', 'c'],
            draggedValues: ['ghost'],
            dropIndex: 0,
            onChange,
        })

        expect(onChange).toHaveBeenCalledTimes(0)
    })

    it('should ignore dragged values that do not exist in selected', () => {
        reorderPickedOptionsOnDrop({
            selected: ['a', 'b', 'c'],
            draggedValues: ['ghost', 'c'],
            dropIndex: 0,
            onChange,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['c', 'a', 'b'],
        })
    })

    it('should clamp a drop index beyond the list length', () => {
        reorderPickedOptionsOnDrop({
            selected: ['a', 'b', 'c'],
            draggedValues: ['a'],
            dropIndex: 100,
            onChange,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['b', 'c', 'a'],
        })
    })
})

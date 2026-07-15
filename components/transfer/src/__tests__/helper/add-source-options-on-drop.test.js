import { addSourceOptionsOnDrop } from '../../transfer/add-source-options-on-drop.js'

describe('Transfer - addSourceOptionsOnDrop', () => {
    const onChange = jest.fn()
    const setHighlightedSourceOptions = jest.fn()

    afterEach(() => {
        onChange.mockClear()
        setHighlightedSourceOptions.mockClear()
    })

    it('should append when no drop index is provided', () => {
        addSourceOptionsOnDrop({
            selected: ['a', 'b'],
            draggedValues: ['x'],
            maxSelections: Infinity,
            onChange,
            setHighlightedSourceOptions,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['a', 'b', 'x'],
        })
    })

    it('should insert at the provided drop index', () => {
        addSourceOptionsOnDrop({
            selected: ['a', 'b', 'c'],
            draggedValues: ['x'],
            dropIndex: 1,
            maxSelections: Infinity,
            onChange,
            setHighlightedSourceOptions,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['a', 'x', 'b', 'c'],
        })
    })

    it('should insert multiple values as a block preserving their order', () => {
        addSourceOptionsOnDrop({
            selected: ['a', 'b'],
            draggedValues: ['x', 'y'],
            dropIndex: 0,
            maxSelections: Infinity,
            onChange,
            setHighlightedSourceOptions,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['x', 'y', 'a', 'b'],
        })
    })

    it('should clear the source highlights', () => {
        addSourceOptionsOnDrop({
            selected: [],
            draggedValues: ['x'],
            maxSelections: Infinity,
            onChange,
            setHighlightedSourceOptions,
        })

        expect(setHighlightedSourceOptions).toHaveBeenCalledWith([])
    })

    it('should evict the oldest values when exceeding maxSelections on append', () => {
        addSourceOptionsOnDrop({
            selected: ['a', 'b', 'c'],
            draggedValues: ['x'],
            maxSelections: 3,
            onChange,
            setHighlightedSourceOptions,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['b', 'c', 'x'],
        })
    })

    it('should never evict the just-dropped values on a positional insert', () => {
        addSourceOptionsOnDrop({
            selected: ['a', 'b', 'c'],
            draggedValues: ['x'],
            dropIndex: 0,
            maxSelections: 3,
            onChange,
            setHighlightedSourceOptions,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['x', 'b', 'c'],
        })
    })

    it('should replace the current selection when maxSelections is 1', () => {
        addSourceOptionsOnDrop({
            selected: ['a'],
            draggedValues: ['x'],
            dropIndex: 0,
            maxSelections: 1,
            onChange,
            setHighlightedSourceOptions,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['x'],
        })
    })

    it('should clamp a drop index beyond the list length', () => {
        addSourceOptionsOnDrop({
            selected: ['a'],
            draggedValues: ['x'],
            dropIndex: 100,
            maxSelections: Infinity,
            onChange,
            setHighlightedSourceOptions,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['a', 'x'],
        })
    })

    it('should do nothing when the dragged set is empty', () => {
        addSourceOptionsOnDrop({
            selected: ['a'],
            draggedValues: [],
            maxSelections: Infinity,
            onChange,
            setHighlightedSourceOptions,
        })

        expect(onChange).toHaveBeenCalledTimes(0)
        expect(setHighlightedSourceOptions).toHaveBeenCalledTimes(0)
    })
})

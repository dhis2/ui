import { moveHighlightedPickedOptionUp } from '../../transfer/move-highlighted-picked-option-up.js'

describe('Transfer - moveHighlightedPickedOptionUp', () => {
    const onChange = jest.fn()

    afterEach(() => {
        onChange.mockClear()
    })

    it('should move a single highlighted option up', () => {
        moveHighlightedPickedOptionUp({
            selected: ['foo', 'bar', 'baz'],
            highlightedPickedOptions: ['bar'],
            onChange,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['bar', 'foo', 'baz'],
        })
    })

    it('should do nothing when trying to move up the first option', () => {
        moveHighlightedPickedOptionUp({
            selected: ['foo', 'bar', 'baz'],
            highlightedPickedOptions: ['foo'],
            onChange,
        })

        expect(onChange).toHaveBeenCalledTimes(0)
    })

    it('should do nothing when trying to move up a non-existing option', () => {
        moveHighlightedPickedOptionUp({
            selected: ['foo', 'bar', 'baz'],
            highlightedPickedOptions: ['ghost'],
            onChange,
        })

        expect(onChange).toHaveBeenCalledTimes(0)
    })

    it('should shift a contiguous block of highlighted options up as a group', () => {
        moveHighlightedPickedOptionUp({
            selected: ['a', 'b', 'c', 'd', 'e'],
            highlightedPickedOptions: ['c', 'd'],
            onChange,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['a', 'c', 'd', 'b', 'e'],
        })
    })

    it('should collapse and shift a non-contiguous selection up in one call', () => {
        moveHighlightedPickedOptionUp({
            selected: ['a', 'b', 'c', 'd', 'e'],
            highlightedPickedOptions: ['b', 'd'],
            onChange,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['b', 'd', 'a', 'c', 'e'],
        })
    })

    it('should preserve the relative order of highlighted items regardless of input order', () => {
        moveHighlightedPickedOptionUp({
            selected: ['a', 'b', 'c', 'd', 'e'],
            highlightedPickedOptions: ['d', 'b'],
            onChange,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['b', 'd', 'a', 'c', 'e'],
        })
    })

    it('should collapse a non-contiguous selection containing the first item without shifting past index 0', () => {
        moveHighlightedPickedOptionUp({
            selected: ['a', 'b', 'c'],
            highlightedPickedOptions: ['a', 'c'],
            onChange,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['a', 'c', 'b'],
        })
    })

    it('should do nothing when the highlighted block is already flush to the top', () => {
        moveHighlightedPickedOptionUp({
            selected: ['a', 'b', 'c', 'd'],
            highlightedPickedOptions: ['a', 'b'],
            onChange,
        })

        expect(onChange).toHaveBeenCalledTimes(0)
    })

    it('should ignore highlighted values that do not exist in selected', () => {
        moveHighlightedPickedOptionUp({
            selected: ['a', 'b', 'c'],
            highlightedPickedOptions: ['ghost', 'c'],
            onChange,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['a', 'c', 'b'],
        })
    })
})

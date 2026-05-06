import { moveHighlightedPickedOptionDown } from '../../transfer/move-highlighted-picked-option-down.js'

describe('Transfer - moveHighlightedPickedOptionDown', () => {
    const onChange = jest.fn()

    afterEach(() => {
        onChange.mockClear()
    })

    it('should move a single highlighted option down', () => {
        moveHighlightedPickedOptionDown({
            selected: ['foo', 'bar', 'baz'],
            highlightedPickedOptions: ['bar'],
            onChange,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['foo', 'baz', 'bar'],
        })
    })

    it('should do nothing when trying to move down the last option', () => {
        moveHighlightedPickedOptionDown({
            selected: ['foo', 'bar', 'baz'],
            highlightedPickedOptions: ['baz'],
            onChange,
        })

        expect(onChange).toHaveBeenCalledTimes(0)
    })

    it('should do nothing when trying to move down a non-existing option', () => {
        moveHighlightedPickedOptionDown({
            selected: ['foo', 'bar', 'baz'],
            highlightedPickedOptions: ['ghost'],
            onChange,
        })

        expect(onChange).toHaveBeenCalledTimes(0)
    })

    it('should shift a contiguous block of highlighted options down as a group', () => {
        moveHighlightedPickedOptionDown({
            selected: ['a', 'b', 'c', 'd', 'e'],
            highlightedPickedOptions: ['b', 'c'],
            onChange,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['a', 'd', 'b', 'c', 'e'],
        })
    })

    it('should collapse and shift a non-contiguous selection down in one call', () => {
        moveHighlightedPickedOptionDown({
            selected: ['a', 'b', 'c', 'd', 'e'],
            highlightedPickedOptions: ['b', 'd'],
            onChange,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['a', 'c', 'e', 'b', 'd'],
        })
    })

    it('should preserve the relative order of highlighted items regardless of input order', () => {
        moveHighlightedPickedOptionDown({
            selected: ['a', 'b', 'c', 'd', 'e'],
            highlightedPickedOptions: ['d', 'b'],
            onChange,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['a', 'c', 'e', 'b', 'd'],
        })
    })

    it('should collapse a non-contiguous selection containing the last item without shifting past the end', () => {
        moveHighlightedPickedOptionDown({
            selected: ['a', 'b', 'c'],
            highlightedPickedOptions: ['a', 'c'],
            onChange,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['b', 'a', 'c'],
        })
    })

    it('should do nothing when the highlighted block is already flush to the bottom', () => {
        moveHighlightedPickedOptionDown({
            selected: ['a', 'b', 'c', 'd'],
            highlightedPickedOptions: ['c', 'd'],
            onChange,
        })

        expect(onChange).toHaveBeenCalledTimes(0)
    })

    it('should ignore highlighted values that do not exist in selected', () => {
        moveHighlightedPickedOptionDown({
            selected: ['a', 'b', 'c'],
            highlightedPickedOptions: ['ghost', 'a'],
            onChange,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['b', 'a', 'c'],
        })
    })
})

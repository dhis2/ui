import { moveHighlightedPickedOptionToBottom } from '../../transfer/move-highlighted-picked-option-to-bottom.js'

describe('Transfer - moveHighlightedPickedOptionToBottom', () => {
    const onChange = jest.fn()

    afterEach(() => {
        onChange.mockClear()
    })

    it('should move a single highlighted option to the bottom', () => {
        moveHighlightedPickedOptionToBottom({
            selected: ['a', 'b', 'c', 'd'],
            highlightedPickedOptions: ['b'],
            onChange,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['a', 'c', 'd', 'b'],
        })
    })

    it('should move a contiguous block to the bottom as a group', () => {
        moveHighlightedPickedOptionToBottom({
            selected: ['a', 'b', 'c', 'd', 'e'],
            highlightedPickedOptions: ['b', 'c'],
            onChange,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['a', 'd', 'e', 'b', 'c'],
        })
    })

    it('should collapse a non-contiguous selection to the bottom preserving relative order', () => {
        moveHighlightedPickedOptionToBottom({
            selected: ['a', 'b', 'c', 'd', 'e'],
            highlightedPickedOptions: ['b', 'd'],
            onChange,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['a', 'c', 'e', 'b', 'd'],
        })
    })

    it('should preserve relative order regardless of highlight input order', () => {
        moveHighlightedPickedOptionToBottom({
            selected: ['a', 'b', 'c', 'd', 'e'],
            highlightedPickedOptions: ['d', 'b'],
            onChange,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['a', 'c', 'e', 'b', 'd'],
        })
    })

    it('should do nothing when the highlighted block is already flush to the bottom', () => {
        moveHighlightedPickedOptionToBottom({
            selected: ['a', 'b', 'c', 'd'],
            highlightedPickedOptions: ['c', 'd'],
            onChange,
        })

        expect(onChange).toHaveBeenCalledTimes(0)
    })

    it('should still run when the selection includes the bottom item but has a gap', () => {
        moveHighlightedPickedOptionToBottom({
            selected: ['a', 'b', 'c', 'd'],
            highlightedPickedOptions: ['b', 'd'],
            onChange,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['a', 'c', 'b', 'd'],
        })
    })

    it('should do nothing when no highlighted options exist in selected', () => {
        moveHighlightedPickedOptionToBottom({
            selected: ['a', 'b', 'c'],
            highlightedPickedOptions: ['ghost'],
            onChange,
        })

        expect(onChange).toHaveBeenCalledTimes(0)
    })

    it('should ignore highlighted values that do not exist in selected', () => {
        moveHighlightedPickedOptionToBottom({
            selected: ['a', 'b', 'c'],
            highlightedPickedOptions: ['ghost', 'a'],
            onChange,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['b', 'c', 'a'],
        })
    })
})

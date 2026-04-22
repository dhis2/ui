import { moveHighlightedPickedOptionToTop } from '../../transfer/move-highlighted-picked-option-to-top.js'

describe('Transfer - moveHighlightedPickedOptionToTop', () => {
    const onChange = jest.fn()

    afterEach(() => {
        onChange.mockClear()
    })

    it('should move a single highlighted option to the top', () => {
        moveHighlightedPickedOptionToTop({
            selected: ['a', 'b', 'c', 'd'],
            highlightedPickedOptions: ['c'],
            onChange,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['c', 'a', 'b', 'd'],
        })
    })

    it('should move a contiguous block to the top as a group', () => {
        moveHighlightedPickedOptionToTop({
            selected: ['a', 'b', 'c', 'd', 'e'],
            highlightedPickedOptions: ['c', 'd'],
            onChange,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['c', 'd', 'a', 'b', 'e'],
        })
    })

    it('should collapse a non-contiguous selection to the top preserving relative order', () => {
        moveHighlightedPickedOptionToTop({
            selected: ['a', 'b', 'c', 'd', 'e'],
            highlightedPickedOptions: ['b', 'd'],
            onChange,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['b', 'd', 'a', 'c', 'e'],
        })
    })

    it('should preserve relative order regardless of highlight input order', () => {
        moveHighlightedPickedOptionToTop({
            selected: ['a', 'b', 'c', 'd', 'e'],
            highlightedPickedOptions: ['d', 'b'],
            onChange,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['b', 'd', 'a', 'c', 'e'],
        })
    })

    it('should do nothing when the highlighted block is already flush to the top', () => {
        moveHighlightedPickedOptionToTop({
            selected: ['a', 'b', 'c', 'd'],
            highlightedPickedOptions: ['a', 'b'],
            onChange,
        })

        expect(onChange).toHaveBeenCalledTimes(0)
    })

    it('should still run when the selection includes the top item but has a gap', () => {
        moveHighlightedPickedOptionToTop({
            selected: ['a', 'b', 'c', 'd'],
            highlightedPickedOptions: ['a', 'c'],
            onChange,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['a', 'c', 'b', 'd'],
        })
    })

    it('should do nothing when no highlighted options exist in selected', () => {
        moveHighlightedPickedOptionToTop({
            selected: ['a', 'b', 'c'],
            highlightedPickedOptions: ['ghost'],
            onChange,
        })

        expect(onChange).toHaveBeenCalledTimes(0)
    })

    it('should ignore highlighted values that do not exist in selected', () => {
        moveHighlightedPickedOptionToTop({
            selected: ['a', 'b', 'c'],
            highlightedPickedOptions: ['ghost', 'c'],
            onChange,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['c', 'a', 'b'],
        })
    })
})

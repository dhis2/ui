import { moveHighlightedPickedOptionUp } from '../../transfer/move-highlighted-picked-option-up.js'

describe('Transfer - moveHighlightedPickedOptionUp', () => {
    const onChange = jest.fn()
    const selected = ['foo', 'bar', 'baz']

    afterEach(() => {
        onChange.mockClear()
    })

    it('should move the highlighted option up', () => {
        const highlighted = ['bar']

        moveHighlightedPickedOptionUp({
            selected,
            highlightedPickedOptions: highlighted,
            onChange,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['bar', 'foo', 'baz'],
        })
    })

    it('should do nothing when trying to move up the first option', () => {
        const highlighted = ['foo']

        moveHighlightedPickedOptionUp({
            selected,
            highlightedPickedOptions: highlighted,
            onChange,
        })

        expect(onChange).toHaveBeenCalledTimes(0)
    })

    it('should do nothing when trying to move up a non-existing option', () => {
        const highlighted = ['foobar']

        moveHighlightedPickedOptionUp({
            selected,
            highlightedPickedOptions: highlighted,
            onChange,
        })

        expect(onChange).toHaveBeenCalledTimes(0)
    })
})

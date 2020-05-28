import { moveHighlightedPickedOptionDown } from '../../../Transfer/Transfer/moveHighlightedPickedOptionDown.js'

describe('Transfer - moveHighlightedPickedOptionDown', () => {
    const onChange = jest.fn()
    const selected = ['foo', 'bar', 'baz']

    afterEach(() => {
        onChange.mockClear()
    })

    it('should move the highlighted option down', () => {
        const highlighted = ['bar']

        moveHighlightedPickedOptionDown({
            selected,
            highlightedPickedOptions: highlighted,
            onChange,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['foo', 'baz', 'bar'],
        })
    })

    it('should do nothing when trying to move down the last option', () => {
        const highlighted = ['baz']

        moveHighlightedPickedOptionDown({
            selected,
            highlightedPickedOptions: highlighted,
            onChange,
        })

        expect(onChange).toHaveBeenCalledTimes(0)
    })

    it('should do nothing when trying to move down a non-existing option', () => {
        const highlighted = ['foobar']

        moveHighlightedPickedOptionDown({
            selected,
            highlightedPickedOptions: highlighted,
            onChange,
        })

        expect(onChange).toHaveBeenCalledTimes(0)
    })
})

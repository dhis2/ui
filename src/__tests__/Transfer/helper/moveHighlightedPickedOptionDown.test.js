import { moveHighlightedPickedOptionDown } from '../../../Transfer/helper/moveHighlightedPickedOptionDown'

describe('Transfer - moveHighlightedPickedOptionDown', () => {
    const onChange = jest.fn()

    const selectedPlainOptions = [
        { label: 'Foo', value: 'foo' },
        { label: 'Bar', value: 'bar' },
        { label: 'Baz', value: 'baz' },
    ]

    afterEach(() => {
        onChange.mockClear()
    })

    it('should move the highlighted option down', () => {
        const highlighted = [{ label: 'Bar', value: 'bar' }]

        moveHighlightedPickedOptionDown({
            selectedPlainOptions,
            highlightedPickedPlainOptions: highlighted,
            onChange,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: [
                { label: 'Foo', value: 'foo' },
                { label: 'Baz', value: 'baz' },
                { label: 'Bar', value: 'bar' },
            ],
        })
    })

    it('should do nothing when trying to move down the last option', () => {
        const highlighted = [{ label: 'Baz', value: 'baz' }]

        moveHighlightedPickedOptionDown({
            selectedPlainOptions,
            highlightedPickedPlainOptions: highlighted,
            onChange,
        })

        expect(onChange).toHaveBeenCalledTimes(0)
    })

    it('should do nothing when trying to move down a non-existing option', () => {
        const highlighted = [{ label: 'Foobar', value: 'foobar' }]

        moveHighlightedPickedOptionDown({
            selectedPlainOptions,
            highlightedPickedPlainOptions: highlighted,
            onChange,
        })

        expect(onChange).toHaveBeenCalledTimes(0)
    })
})

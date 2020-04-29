import { moveHighlightedPickedOptionUp } from '../../../Transfer/helper/moveHighlightedPickedOptionUp'

describe('Transfer - moveHighlightedPickedOptionUp', () => {
    const onChange = jest.fn()

    const selectedPlainOptions = [
        { label: 'Foo', value: 'foo' },
        { label: 'Bar', value: 'bar' },
        { label: 'Baz', value: 'baz' },
    ]

    afterEach(() => {
        onChange.mockClear()
    })

    it('should move the highlighted option up', () => {
        const highlighted = [{ label: 'Bar', value: 'bar' }]

        moveHighlightedPickedOptionUp({
            selectedPlainOptions,
            highlightedPickedPlainOptions: highlighted,
            onChange,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: [
                { label: 'Bar', value: 'bar' },
                { label: 'Foo', value: 'foo' },
                { label: 'Baz', value: 'baz' },
            ],
        })
    })

    it('should do nothing when trying to move up the first option', () => {
        const highlighted = [{ label: 'Foo', value: 'foo' }]

        moveHighlightedPickedOptionUp({
            selectedPlainOptions,
            highlightedPickedPlainOptions: highlighted,
            onChange,
        })

        expect(onChange).toHaveBeenCalledTimes(0)
    })

    it('should do nothing when trying to move up a non-existing option', () => {
        const highlighted = [{ label: 'Foobar', value: 'foobar' }]

        moveHighlightedPickedOptionUp({
            selectedPlainOptions,
            highlightedPickedPlainOptions: highlighted,
            onChange,
        })

        expect(onChange).toHaveBeenCalledTimes(0)
    })
})

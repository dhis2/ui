import { removeIndividualPickedOptions } from '../../../Transfer/Transfer/removeIndividualPickedOptions.js'

describe('Transfer - removeIndividualPickedOptions', () => {
    const onChange = jest.fn()
    const setHighlightedPickedOptions = jest.fn()

    afterEach(() => {
        onChange.mockClear()
        setHighlightedPickedOptions.mockClear()
    })

    const selectedOptions = [
        { label: 'Foo', value: 'foo' },
        { label: 'Bar', value: 'bar' },
        { label: 'Baz', value: 'baz' },
    ]

    const highlightedPickedOptions = [
        { label: 'Bar', value: 'bar' },
        { label: 'Baz', value: 'baz' },
    ]

    it('should remove the highlighted picked options', () => {
        removeIndividualPickedOptions({
            highlightedPickedOptions,
            selectedOptions,
            onChange,
            setHighlightedPickedOptions,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: [{ label: 'Foo', value: 'foo' }],
        })
    })

    it('should reset the highlighted picked options', () => {
        removeIndividualPickedOptions({
            highlightedPickedOptions,
            selectedOptions,
            onChange,
            setHighlightedPickedOptions,
        })

        expect(setHighlightedPickedOptions).toHaveBeenCalledWith([])
    })
})

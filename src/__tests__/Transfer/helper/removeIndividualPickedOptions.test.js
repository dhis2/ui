import { removeIndividualPickedOptions } from '../../../Transfer/helper/removeIndividualPickedOptions'

describe('Transfer - removeIndividualPickedOptions', () => {
    const onChange = jest.fn()
    const setHighlightedPickedOptions = jest.fn()

    afterEach(() => {
        onChange.mockClear()
        setHighlightedPickedOptions.mockClear()
    })

    const selectedPlainOptions = [
        { label: 'Foo', value: 'foo' },
        { label: 'Bar', value: 'bar' },
        { label: 'Baz', value: 'baz' },
    ]

    const highlightedPickedReactOptions = [
        { label: 'Bar', value: 'bar' },
        { label: 'Baz', value: 'baz' },
    ]

    it('should remove the highlighted picked options', () => {
        removeIndividualPickedOptions({
            highlightedPickedReactOptions,
            selectedPlainOptions,
            onChange,
            setHighlightedPickedOptions,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: [{ label: 'Foo', value: 'foo' }],
        })
    })

    it('should reset the highlighted picked options', () => {
        removeIndividualPickedOptions({
            highlightedPickedReactOptions,
            selectedPlainOptions,
            onChange,
            setHighlightedPickedOptions,
        })

        expect(setHighlightedPickedOptions).toHaveBeenCalledWith([])
    })
})

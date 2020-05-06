import { addIndividualSourceOptions } from '../../Transfer/addIndividualSourceOptions.js'

describe('Transfer - addIndividualSourceOptions', () => {
    const onChange = jest.fn()
    const setHighlightedSourceOptions = jest.fn()

    const filteredSourceOptions = [
        { label: 'Foo', value: 'foo' },
        { label: 'Foobar', value: 'foobar' },
        { label: 'Foobaz', value: 'foobaz' },
    ]

    const highlightedSourceOptions = [
        { label: 'Foobaz', value: 'foobaz' },
        { label: 'Bar', value: 'bar' },
    ]

    const selectedOptions = [{ label: 'Barfoo', value: 'barfoo' }]

    afterEach(() => {
        onChange.mockClear()
        setHighlightedSourceOptions.mockClear()
    })

    it('should add the highlighted source options to the selectedOptions array', () => {
        addIndividualSourceOptions({
            highlightedSourceOptions,
            maxSelections: Infinity,
            onChange,
            selectedOptions,
            setHighlightedSourceOptions,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: [
                { label: 'Barfoo', value: 'barfoo' },
                { label: 'Foobaz', value: 'foobaz' },
                { label: 'Bar', value: 'bar' },
            ],
        })
    })

    it('should reset the highlighted source options', () => {
        addIndividualSourceOptions({
            highlightedSourceOptions,
            maxSelections: Infinity,
            onChange,
            selectedOptions,
            setHighlightedSourceOptions,
        })

        expect(setHighlightedSourceOptions).toHaveBeenCalledWith([])
    })

    it('should only select the filtered source options', () => {
        addIndividualSourceOptions({
            filterable: true,
            filter: 'oo',
            filteredSourceOptions,
            highlightedSourceOptions,
            maxSelections: Infinity,
            onChange,
            selectedOptions,
            setHighlightedSourceOptions,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: [
                { label: 'Barfoo', value: 'barfoo' },
                { label: 'Foobaz', value: 'foobaz' },
            ],
        })
    })

    it('should only call onChange with the max selection amount', () => {
        addIndividualSourceOptions({
            filterable: true,
            filter: 'oo',
            filteredSourceOptions,
            highlightedSourceOptions: highlightedSourceOptions.slice(0, 1),
            maxSelections: 1,
            onChange,
            selectedOptions: selectedOptions.slice(0, 1),
            setHighlightedSourceOptions,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: [{ label: 'Foobaz', value: 'foobaz' }],
        })
    })
})

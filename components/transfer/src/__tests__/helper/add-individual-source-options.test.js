import { addIndividualSourceOptions } from '../../transfer/add-individual-source-options.js'

describe('Transfer - addIndividualSourceOptions', () => {
    const onChange = jest.fn()
    const setHighlightedSourceOptions = jest.fn()

    const sourceOptions = [
        { label: 'Foo', value: 'foo' },
        { label: 'Foobar', value: 'foobar' },
        { label: 'Foobaz', value: 'foobaz' },
    ]

    const highlightedSourceOptions = ['foobaz', 'bar']
    const selected = ['barfoo']

    afterEach(() => {
        onChange.mockClear()
        setHighlightedSourceOptions.mockClear()
    })

    it('should add the highlighted source options to the selected array', () => {
        addIndividualSourceOptions({
            highlightedSourceOptions,
            maxSelections: Infinity,
            onChange,
            selected,
            setHighlightedSourceOptions,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['barfoo', 'foobaz', 'bar'],
        })
    })

    it('should reset the highlighted source options', () => {
        addIndividualSourceOptions({
            highlightedSourceOptions,
            maxSelections: Infinity,
            onChange,
            selected,
            setHighlightedSourceOptions,
        })

        expect(setHighlightedSourceOptions).toHaveBeenCalledWith([])
    })

    it('should only select the filtered source options', () => {
        addIndividualSourceOptions({
            filterable: true,
            filter: 'oo',
            sourceOptions,
            highlightedSourceOptions,
            maxSelections: Infinity,
            onChange,
            selected,
            setHighlightedSourceOptions,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['barfoo', 'foobaz'],
        })
    })

    it('should only call onChange with the max selection amount', () => {
        addIndividualSourceOptions({
            filterable: true,
            filter: 'oo',
            sourceOptions,
            highlightedSourceOptions: highlightedSourceOptions.slice(0, 1),
            maxSelections: 1,
            onChange,
            selected: selected,
            setHighlightedSourceOptions,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['foobaz'],
        })
    })
})

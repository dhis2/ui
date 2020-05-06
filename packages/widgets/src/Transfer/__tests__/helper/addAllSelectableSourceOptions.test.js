import { addAllSelectableSourceOptions } from '../../Transfer/addAllSelectableSourceOptions.js'

describe('Transfer - addAllSelectableSourceOptions', () => {
    const onChange = jest.fn()
    const setHighlightedSourceOptions = jest.fn()

    const sourceOptions = [
        { label: 'Foo', value: 'foo' },
        { label: 'Bar', value: 'bar' },
        { label: 'Baz', value: 'baz' },
        { label: 'Foobar', value: 'foobar' },
        { label: 'Foobaz', value: 'foobaz' },
    ]

    afterEach(() => {
        onChange.mockClear()
        setHighlightedSourceOptions.mockClear()
    })

    it('should add all selectable source options to the selectedOptions array', () => {
        const selectedOptions = [{ label: 'Barfoo', value: 'barfoo' }]
        const expected = {
            selected: [
                { label: 'Barfoo', value: 'barfoo' },
                { label: 'Foo', value: 'foo' },
                { label: 'Bar', value: 'bar' },
                { label: 'Baz', value: 'baz' },
                { label: 'Foobar', value: 'foobar' },
                { label: 'Foobaz', value: 'foobaz' },
            ],
        }

        addAllSelectableSourceOptions({
            sourceOptions,
            selectedOptions,
            onChange,
            setHighlightedSourceOptions,
        })

        expect(onChange).toHaveBeenCalledWith(expected)
    })

    it('should reset all highlighted source options', () => {
        addAllSelectableSourceOptions({
            sourceOptions,
            selectedOptions: [{ label: 'Barfoo', value: 'barfoo' }],
            onChange,
            setHighlightedSourceOptions,
        })

        expect(setHighlightedSourceOptions).toHaveBeenCalledWith([])
    })
})

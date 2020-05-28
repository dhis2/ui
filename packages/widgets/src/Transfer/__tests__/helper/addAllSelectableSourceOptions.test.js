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

    it('should add all selectable source options to the selected array', () => {
        const selected = ['barfoo']
        const expected = {
            selected: ['barfoo', 'foo', 'bar', 'baz', 'foobar', 'foobaz'],
        }

        addAllSelectableSourceOptions({
            sourceOptions,
            selected,
            onChange,
            setHighlightedSourceOptions,
        })

        expect(onChange).toHaveBeenCalledWith(expected)
    })

    it('should reset all highlighted source options', () => {
        addAllSelectableSourceOptions({
            sourceOptions,
            selected: ['barfoo'],
            onChange,
            setHighlightedSourceOptions,
        })

        expect(setHighlightedSourceOptions).toHaveBeenCalledWith([])
    })
})

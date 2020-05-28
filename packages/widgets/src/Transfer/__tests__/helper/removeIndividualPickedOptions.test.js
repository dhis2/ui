import { removeIndividualPickedOptions } from '../../../Transfer/Transfer/removeIndividualPickedOptions.js'

describe('Transfer - removeIndividualPickedOptions', () => {
    const onChange = jest.fn()
    const setHighlightedPickedOptions = jest.fn()

    afterEach(() => {
        onChange.mockClear()
        setHighlightedPickedOptions.mockClear()
    })

    const selected = ['foo', 'bar', 'baz']
    const highlightedPickedOptions = ['bar', 'baz']

    it('should remove the highlighted picked options', () => {
        removeIndividualPickedOptions({
            highlightedPickedOptions,
            selected,
            onChange,
            setHighlightedPickedOptions,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: ['foo'],
        })
    })

    it('should reset the highlighted picked options', () => {
        removeIndividualPickedOptions({
            highlightedPickedOptions,
            selected,
            onChange,
            setHighlightedPickedOptions,
        })

        expect(setHighlightedPickedOptions).toHaveBeenCalledWith([])
    })
})

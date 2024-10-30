import { removeAllPickedOptions } from '../../simple-transfer/remove-all-picked-options.js'

describe('SimpleTransfer - removeAllPickedOptions', () => {
    const onChange = jest.fn()
    const setHighlightedPickedOptions = jest.fn()

    afterEach(() => {
        onChange.mockClear()
        setHighlightedPickedOptions.mockClear()
    })

    it('should reset the selected array', () => {
        removeAllPickedOptions({
            onChange,
            setHighlightedPickedOptions,
        })

        expect(onChange).toHaveBeenCalledWith({ selected: [] })
    })

    it('should reset the highlighted picked options', () => {
        removeAllPickedOptions({
            onChange,
            setHighlightedPickedOptions,
        })

        expect(setHighlightedPickedOptions).toHaveBeenCalledWith([])
    })
})

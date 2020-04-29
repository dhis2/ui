import { toggleReplace } from '../../../../Transfer/helper/useHighlightedOptions/toggleReplace'

describe('Transfer - useHighlightedOptions - toggleReplace', () => {
    const setHighlightedOptions = jest.fn()

    afterEach(() => {
        setHighlightedOptions.mockClear()
    })

    describe('maxSelections=1', () => {
        it('should replace the current highlighted option', () => {
            const highlightedOptions = [{ value: 'foo', label: 'Foo' }]
            const option = { value: 'bar', label: 'Bar' }
            const expected = [option]

            toggleReplace({
                highlightedOptions,
                option,
                setHighlightedOptions,
            })

            expect(setHighlightedOptions).toHaveBeenCalledWith(expected)
        })

        it('should empty the highlighted options', () => {
            const highlightedOptions = [{ value: 'foo', label: 'Foo' }]
            const option = { value: 'foo', label: 'Foo' }
            const expected = []

            toggleReplace({
                highlightedOptions,
                option,
                setHighlightedOptions,
            })

            expect(setHighlightedOptions).toHaveBeenCalledWith(expected)
        })
    })
})

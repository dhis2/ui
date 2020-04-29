import { toggleAdd } from '../../../../Transfer/helper/useHighlightedOptions/toggleAdd'

describe('Transfer - useHighlightedOptions - toggleAdd', () => {
    const setHighlightedOptions = jest.fn()

    afterEach(() => {
        setHighlightedOptions.mockClear()
    })

    describe('maxSelections=1', () => {
        const maxSelections = 1

        it('should replace the current highlighted option', () => {
            const highlightedOptions = [{ value: 'foo', label: 'Foo' }]
            const option = { value: 'bar', label: 'Bar' }
            const expected = [option]

            toggleAdd({
                maxSelections,
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

            toggleAdd({
                maxSelections,
                highlightedOptions,
                option,
                setHighlightedOptions,
            })

            expect(setHighlightedOptions).toHaveBeenCalledWith(expected)
        })
    })

    describe('maxSelections=Infinity', () => {
        const maxSelections = Infinity

        it('should add the option to the highlighted options when maxSelections is Infinity', () => {
            const highlightedOptions = [{ value: 'foo', label: 'Foo' }]
            const option = { value: 'bar', label: 'Bar' }
            const expected = [...highlightedOptions, option]

            toggleAdd({
                maxSelections,
                highlightedOptions,
                option,
                setHighlightedOptions,
            })

            expect(setHighlightedOptions).toHaveBeenCalledWith(expected)
        })

        it('should remove the option from the highlighted list', () => {
            const optionOne = { value: 'foo', label: 'Foo' }
            const optionTwo = { value: 'bar', label: 'Bar' }
            const optionThree = { value: 'baz', label: 'Baz' }
            const highlightedOptions = [optionOne, optionTwo, optionThree]
            const expected = [optionOne, optionThree]
            const option = optionTwo

            toggleAdd({
                maxSelections,
                highlightedOptions,
                option,
                setHighlightedOptions,
            })

            expect(setHighlightedOptions).toHaveBeenCalledWith(expected)
        })
    })
})

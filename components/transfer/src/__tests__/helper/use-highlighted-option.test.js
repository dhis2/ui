import { useHighlightedOptions } from '../../transfer/use-highlighted-options.js'
import { createToggleHighlightedOption } from '../../transfer/use-highlighted-options/create-toggle-highlighted-option.js'

jest.mock(
    '../../../Transfer/Transfer/useHighlightedOptions/createToggleHighlightedOption',
    () => ({
        createToggleHighlightedOption: jest.fn(),
    })
)

jest.mock('react', () => ({
    useState: jest.fn(initialValue => [initialValue, jest.fn()]),
}))

describe('Transfer - useHighlightedOptions', () => {
    it('should use null as the default value of lastClicked', () => {
        useHighlightedOptions({})
        expect(createToggleHighlightedOption).toHaveBeenCalledWith(
            expect.objectContaining({
                lastClicked: null,
            })
        )
    })

    it('should use an empty array as default value of highlightedOptions', () => {
        const { highlightedOptions } = useHighlightedOptions({})
        expect(highlightedOptions).toEqual([])
    })

    it('should use the createToggleHighlightedOption factory to create the toggleHighlightedOption function', () => {
        const createToggleHighlightedOptionReturnValue = jest.fn()
        createToggleHighlightedOption.mockImplementationOnce(
            () => createToggleHighlightedOptionReturnValue
        )

        const { toggleHighlightedOption } = useHighlightedOptions({})
        expect(toggleHighlightedOption).toBe(
            createToggleHighlightedOptionReturnValue
        )
    })
})

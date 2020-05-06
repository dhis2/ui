import { ADD_MODE, RANGE_MODE, REPLACE_MODE } from '../../../common/index.js'
import { createToggleHighlightedOption } from '../../../Transfer/useHighlightedOptions/createToggleHighlightedOption.js'
import { toggleAdd } from '../../../Transfer/useHighlightedOptions/toggleAdd.js'
import { toggleRange } from '../../../Transfer/useHighlightedOptions/toggleRange.js'
import { toggleReplace } from '../../../Transfer/useHighlightedOptions/toggleReplace.js'

jest.mock(
    '../../../../Transfer/Transfer/useHighlightedOptions/toggleAdd',
    () => ({ toggleAdd: jest.fn() })
)

jest.mock(
    '../../../../Transfer/Transfer/useHighlightedOptions/toggleRange',
    () => ({ toggleRange: jest.fn() })
)

jest.mock(
    '../../../../Transfer/Transfer/useHighlightedOptions/toggleReplace',
    () => ({ toggleReplace: jest.fn() })
)

describe('Transfer- useHighlightedOptions - createToggleHighlightedOption', () => {
    let toggleHighlightedOption
    const disabled = false
    const lastClicked = null
    const setLastClicked = jest.fn()
    const highlightedOptions = []
    const maxSelections = Infinity
    const setHighlightedOptions = jest.fn()
    const options = []
    const option = { value: 'foo', label: 'Foo' }
    const createToggleHighlightedOptionDefaultPayload = {
        options,
        disabled,
        highlightedOptions,
        lastClicked,
        maxSelections,
        setHighlightedOptions,
        setLastClicked,
    }

    beforeEach(() => {
        toggleHighlightedOption = createToggleHighlightedOption(
            createToggleHighlightedOptionDefaultPayload
        )
    })

    afterEach(() => {
        setLastClicked.mockClear()
        toggleAdd.mockClear()
        toggleRange.mockClear()
        toggleReplace.mockClear()
    })

    it('should set the lastClicked to the clicked option when mode is ADD_MODE', () => {
        toggleHighlightedOption({ option, mode: ADD_MODE })
        expect(setLastClicked).toHaveBeenCalledWith(option.value)
    })

    it('should set the lastClicked to the clicked option when mode is REPLACE_MODE', () => {
        toggleHighlightedOption({ option, mode: REPLACE_MODE })
        expect(setLastClicked).toHaveBeenCalledWith(option.value)
    })

    it('should not overwrite the lastClicked to the clicked option when mode is RANGE_MODE', () => {
        toggleHighlightedOption({ option, mode: RANGE_MODE })
        expect(setLastClicked).toHaveBeenCalledTimes(0)
    })

    it('should use the toggleAdd function when mode is ADD_MODE', () => {
        toggleHighlightedOption({ option, mode: ADD_MODE })
        expect(toggleAdd).toHaveBeenCalledTimes(1)
        expect(toggleRange).toHaveBeenCalledTimes(0)
        expect(toggleReplace).toHaveBeenCalledTimes(0)
    })

    it('should use the toggleRange function when mode is RANGE_MODE', () => {
        toggleHighlightedOption({ option, mode: RANGE_MODE })
        expect(toggleRange).toHaveBeenCalledTimes(1)
        expect(toggleAdd).toHaveBeenCalledTimes(0)
        expect(toggleReplace).toHaveBeenCalledTimes(0)
    })

    it('should use the toggleReplace function when mode is REPLACE_MODE', () => {
        toggleHighlightedOption({ option, mode: REPLACE_MODE })
        expect(toggleReplace).toHaveBeenCalledTimes(1)
        expect(toggleAdd).toHaveBeenCalledTimes(0)
        expect(toggleRange).toHaveBeenCalledTimes(0)
    })

    it('should do nothing when disabled is true', () => {
        toggleHighlightedOption = createToggleHighlightedOption({
            ...createToggleHighlightedOptionDefaultPayload,
            disabled: true,
        })

        toggleHighlightedOption({ option, mode: ADD_MODE })
        toggleHighlightedOption({ option, mode: RANGE_MODE })
        toggleHighlightedOption({ option, mode: REPLACE_MODE })

        expect(toggleReplace).toHaveBeenCalledTimes(0)
        expect(toggleAdd).toHaveBeenCalledTimes(0)
        expect(toggleRange).toHaveBeenCalledTimes(0)
        expect(setLastClicked).toHaveBeenCalledTimes(0)
    })
})

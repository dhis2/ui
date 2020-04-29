import { ADD_MODE, RANGE_MODE, REPLACE_MODE } from '../../../../Transfer/common'
import { createChildren } from '../../../common/createChildren'
import { createToggleHighlightedOption } from '../../../../Transfer/helper/useHighlightedOptions/createToggleHighlightedOption'
import { toggleAdd } from '../../../../Transfer/helper/useHighlightedOptions/toggleAdd'
import { toggleRange } from '../../../../Transfer/helper/useHighlightedOptions/toggleRange'
import { toggleReplace } from '../../../../Transfer/helper/useHighlightedOptions/toggleReplace'

jest.mock(
    '../../../../Transfer/helper/useHighlightedOptions/toggleAdd',
    () => ({ toggleAdd: jest.fn() })
)

jest.mock(
    '../../../../Transfer/helper/useHighlightedOptions/toggleRange',
    () => ({ toggleRange: jest.fn() })
)

jest.mock(
    '../../../../Transfer/helper/useHighlightedOptions/toggleReplace',
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
    const reactOptions = createChildren()
    const option = { value: 'foo', label: 'Foo' }
    const createToggleHighlightedOptionDefaultPayload = {
        reactOptions,
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
        expect(setLastClicked).toHaveBeenCalledWith(option)
    })

    it('should set the lastClicked to the clicked option when mode is REPLACE_MODE', () => {
        toggleHighlightedOption({ option, mode: REPLACE_MODE })
        expect(setLastClicked).toHaveBeenCalledWith(option)
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

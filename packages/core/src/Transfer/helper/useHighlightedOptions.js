import '../types.js'

import { useState } from 'react'

import { createToggleHighlightedOption } from './useHighlightedOptions/createToggleHighlightedOption'

/**
 * @param {Object} args
 * @param {bool} args.disabled
 * @param {number} args.maxSelection
 * @param {ReactElement} args.reactOptions
 * @returns {Object} highlighted options & helpers
 */
export const useHighlightedOptions = ({
    disabled,
    maxSelections,
    reactOptions,
}) => {
    /**
     * These are important so the stored element can be used
     * as range-start when using shift multiple times consecutively
     */
    const [lastClicked, setLastClicked] = useState(null)
    const [highlightedOptions, setHighlightedOptions] = useState([])

    const toggleHighlightedOption = createToggleHighlightedOption({
        disabled,
        highlightedOptions,
        setHighlightedOptions,
        maxSelections,
        setLastClicked,
        reactOptions,
        lastClicked,
    })

    return {
        highlightedOptions,
        setHighlightedOptions,
        toggleHighlightedOption,
    }
}

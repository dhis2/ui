import { useState } from 'react'

/**
 * @param {Object} args
 * @param {bool} args.disabled
 * @param {number} args.maxSelection
 * @param {Object[]} args.options
 * @returns {Object} highlighted options & helpers
 */
export const useHighlightedOptions = () => {
    /**
     * These are important so the stored element can be used
     * as range-start when using shift multiple times consecutively
     */
    const [highlightedOptions, setHighlightedOptions] = useState([])

    return {
        highlightedOptions,
        setHighlightedOptions,
    }
}

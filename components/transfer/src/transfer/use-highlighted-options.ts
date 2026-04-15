import { useState } from 'react'
import { TransferOptionObject } from '../common/index.ts'
import { createToggleHighlightedOption } from './use-highlighted-options/create-toggle-highlighted-option.ts'

interface UseHighlightedOptionsArgs {
    disabled?: boolean
    maxSelections: number
    options: TransferOptionObject[]
}

interface UseHighlightedOptionsResult {
    highlightedOptions: string[]
    setHighlightedOptions: (options: string[]) => void
    toggleHighlightedOption: (args: {
        option: TransferOptionObject
        mode: string
    }) => void
}

export const useHighlightedOptions = ({
    disabled,
    maxSelections,
    options,
}: UseHighlightedOptionsArgs): UseHighlightedOptionsResult => {
    const [lastClicked, setLastClicked] = useState<string | null>(null)
    const [highlightedOptions, setHighlightedOptions] = useState<string[]>([])

    const toggleHighlightedOption = createToggleHighlightedOption({
        disabled,
        highlightedOptions,
        setHighlightedOptions,
        maxSelections,
        setLastClicked,
        options,
        lastClicked,
    })

    return {
        highlightedOptions,
        setHighlightedOptions,
        toggleHighlightedOption,
    }
}

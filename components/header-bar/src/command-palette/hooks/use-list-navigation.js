import { useCallback } from 'react'
import { useCommandPaletteContext } from '../context/command-palette-context.js'

const useListNavigation = () => {
    const { highlightedIndex, setHighlightedIndex } = useCommandPaletteContext()

    const handleListNavigation = useCallback(
        ({ event, listLength }) => {
            const lastIndex = listLength - 1
            switch (event.key) {
                case 'ArrowDown':
                    event.preventDefault()
                    setHighlightedIndex(
                        highlightedIndex >= lastIndex ? 0 : highlightedIndex + 1
                    )
                    break
                case 'ArrowUp':
                    event.preventDefault()
                    setHighlightedIndex(
                        highlightedIndex > 0 ? highlightedIndex - 1 : lastIndex
                    )
                    break
                default:
                    break
            }
        },
        [highlightedIndex, setHighlightedIndex]
    )

    return handleListNavigation
}

export default useListNavigation

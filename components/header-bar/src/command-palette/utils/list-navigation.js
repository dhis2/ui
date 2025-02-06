export const handleListNavigation = ({
    event,
    listLength,
    highlightedIndex,
}) => {
    const lastIndex = listLength - 1
    switch (event.key) {
        case 'ArrowDown':
            event.preventDefault()
            return highlightedIndex >= lastIndex ? 0 : highlightedIndex + 1

        case 'ArrowUp':
            event.preventDefault()
            return highlightedIndex > 0 ? highlightedIndex - 1 : lastIndex
        default:
            return highlightedIndex
    }
}

const getArrowPosition = (popperPlacement) => {
    const direction =
        typeof popperPlacement === 'string' ? popperPlacement.split('-')[0] : ''

    switch (direction) {
        case 'top':
            return 'bottom'
        case 'right':
            return 'left'
        case 'bottom':
            return 'top'
        case 'left':
            return 'right'
        default:
            return ''
    }
}

export { getArrowPosition }

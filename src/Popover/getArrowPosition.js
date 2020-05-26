const getArrowPosition = popperAttribute => {
    const placement =
        popperAttribute && popperAttribute['data-popper-placement']
    const direction =
        typeof placement === 'string' ? placement.split('-')[0] : ''

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

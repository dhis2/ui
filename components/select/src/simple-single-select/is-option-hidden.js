// If this many pixels are invisible, we still consider the option visible
// The reason we're doing this is because of JS' number issues,
// e.g:
//      optionOffsetBottom is 345.6000061035156
//      containerOffsetBottom is 345.5999984741211
//      -> Without tolerance, option is invisible
const TOLERANCE = 2

export function isOptionHidden(option, scrollContainer) {
    const optionOffsetTop = option.getBoundingClientRect().top
    const optionHeight = option.offsetHeight
    const optionOffsetBottom = optionOffsetTop + optionHeight
    const containerOffsetTop = scrollContainer.getBoundingClientRect().top
    const containerHeight = scrollContainer.offsetHeight
    const containerOffsetBottom = containerOffsetTop + containerHeight

    return (
        optionOffsetBottom > containerOffsetBottom + TOLERANCE ||
        optionOffsetTop < containerOffsetTop - TOLERANCE
    )
}

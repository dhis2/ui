// If this many pixels are invisible, we still consider the option visible
const TOLERANCE = 2

export function isOptionHidden(
    option: HTMLElement,
    scrollContainer: HTMLElement
): boolean {
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

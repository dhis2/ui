export function isOptionHidden(option, scrollContainer) {
    const optionOffsetTop = option.getBoundingClientRect().top
    const optionHeight = option.offsetHeight
    const optionOffsetBottom = optionOffsetTop + optionHeight
    const containerOffsetTop = scrollContainer.getBoundingClientRect().top
    const containerHeight = scrollContainer.offsetHeight
    const containerOffsetBottom = containerOffsetTop + containerHeight

    return (
        optionOffsetBottom > containerOffsetBottom ||
        optionOffsetTop < containerOffsetTop
    )
}

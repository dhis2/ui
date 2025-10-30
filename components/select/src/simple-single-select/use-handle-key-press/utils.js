export function isEnabled({ disabled }) {
    return !disabled
}

export function findNextOptionIndex({ options, activeIndex }) {
    const startIndex = activeIndex + 1
    const optionsToSearch = options.slice(startIndex)

    // Need to add back the count we removed by slicing the options array
    return startIndex + optionsToSearch.findIndex(isEnabled)
}

export function findPrevOptionIndex({ options, activeIndex }) {
    return options.slice(0, activeIndex).findLastIndex(isEnabled)
}

export function findFirstOptionIndex({ options }) {
    return options.findIndex(isEnabled)
}

export function findLastOptionIndex({ options }) {
    return options.findLastIndex(isEnabled)
}

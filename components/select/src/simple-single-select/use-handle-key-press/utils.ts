import { OptionType } from '../shared-prop-types.ts'

export function isEnabled({ disabled }: { disabled?: boolean }): boolean {
    return !disabled
}

export function findNextOptionIndex({
    options,
    activeIndex,
}: {
    options: OptionType[]
    activeIndex: number
}): number {
    const startIndex = activeIndex + 1
    const optionsToSearch = options.slice(startIndex)

    // Need to add back the count we removed by slicing the options array
    const foundIndex = optionsToSearch.findIndex(isEnabled)
    return foundIndex === -1 ? -1 : startIndex + foundIndex
}

export function findPrevOptionIndex({
    options,
    activeIndex,
}: {
    options: OptionType[]
    activeIndex: number
}): number {
    return options.slice(0, activeIndex).findLastIndex(isEnabled)
}

export function findFirstOptionIndex({
    options,
}: {
    options: OptionType[]
}): number {
    return options.findIndex(isEnabled)
}

export function findLastOptionIndex({
    options,
}: {
    options: OptionType[]
}): number {
    return options.findLastIndex(isEnabled)
}

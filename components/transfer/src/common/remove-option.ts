import { findOptionIndex } from './find-option-index.ts'
import { TransferOptionObject } from './is-option.ts'

export const removeOption = (
    options: TransferOptionObject[],
    option: TransferOptionObject
): TransferOptionObject[] => {
    const index = findOptionIndex(options, option)

    if (index === -1) {
        return options
    }
    if (index === 0) {
        return options.slice(1)
    }

    return [...options.slice(0, index), ...options.slice(index + 1)]
}

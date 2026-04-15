import { isOption, TransferOptionObject } from './is-option.ts'

export const findOptionIndex = (
    options: TransferOptionObject[],
    option: TransferOptionObject
): number => options.findIndex((current) => isOption(current, option))

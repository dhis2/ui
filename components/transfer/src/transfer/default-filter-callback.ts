import { TransferOptionObject } from '../common/index.ts'

export const defaultFilterCallback = (
    options: TransferOptionObject[],
    filter: string
): TransferOptionObject[] =>
    filter === ''
        ? options
        : options.filter(({ label }) => label.match(new RegExp(filter, 'i')))

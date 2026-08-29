import { TransferOptionObject } from '../common/index.ts'

export const defaultFilterCallback = (
    options: TransferOptionObject[],
    filter: string
): TransferOptionObject[] => {
    if (filter === '') {
        return options
    }

    try {
        const regex = new RegExp(filter, 'i')
        return options.filter(({ label }) => regex.test(label))
    } catch {
        console.warn('Invalid regex filter:', filter)
        return options
    }
}

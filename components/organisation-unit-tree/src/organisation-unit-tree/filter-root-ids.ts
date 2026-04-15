import { isPathIncluded } from '../helpers/index.ts'

export const filterRootIds = (
    filter: string[] | undefined,
    rootIds: string[]
): string[] => {
    if (!filter?.length) {
        return rootIds
    }

    return rootIds.filter((rootId) => isPathIncluded(filter, `/${rootId}`))
}

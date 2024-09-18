import { isPathIncluded } from '../helpers/index.js'

export const filterRootIds = (filter, rootIds) => {
    if (!filter?.length) {
        return rootIds
    }

    return rootIds.filter((rootId) => isPathIncluded(filter, `/${rootId}`))
}

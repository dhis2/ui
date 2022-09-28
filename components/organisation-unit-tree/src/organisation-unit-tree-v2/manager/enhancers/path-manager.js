export const pathManager = (manager) => {
    function parsePath(path = []) {
        const rootId = manager.getRootIds().find((id) => path.includes(id))
        const allIds = path.substring(path.indexOf(rootId)).split('/')

        return {
            rootId,
            allIds,
            unitId: allIds[allIds.length - 1],
            parentId: allIds[allIds.length - 2],
            ancestorIds: allIds.slice(0, allIds.length - 1),
        }
    }

    return {
        parsePath,
    }
}

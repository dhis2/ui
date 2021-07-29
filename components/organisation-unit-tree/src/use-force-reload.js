import { useEffect, useState } from 'react'

/**
 * This will create a new reloadId everytime "forceReload" changes to true,
 * which can be used as the "key" prop on the org unit tree.
 * When that id changes, the whole tree rerenders
 * and therefore triggers all "useDataQuery"s to
 * run the query again
 *
 * @param {bool} forceReload
 * @returns {Int}
 */
export const useForceReload = forceReload => {
    const [reloadId, setReloadId] = useState(0)

    useEffect(() => {
        forceReload === true && setReloadId(reloadId + 1)
    }, [forceReload])

    return reloadId
}

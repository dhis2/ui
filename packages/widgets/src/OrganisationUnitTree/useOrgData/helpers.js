import { fromEntries } from '../fromEntries'

const withChildrenFields = 'children[path,displayName,id],displayName,path,id'
const withoutChildrenFields = 'displayName,path,id'

export const createOrgUnitQuery = id => ({
    resource: `organisationUnits/${id}`,
    params: ({ withChildren, isUserDataViewFallback }) => ({
        isUserDataViewFallback,
        fields: withChildren ? withChildrenFields : withoutChildrenFields,
        paging: false,
    }),
})

export const createQuery = ids =>
    ids.reduce((query, id) => ({ ...query, [id]: createOrgUnitQuery(id) }), {})

/**
 * @param {Object[]} nodes
 * @returns {}
 */
export const addMissingDisplayNameProps = nodes => {
    const nodeEntries = Object.entries(nodes)
    const nodesWithDisplayName = nodeEntries.map(([id, node]) => {
        const displayName = node.displayName || ''
        return [id, { ...node, displayName }]
    })

    return fromEntries(nodesWithDisplayName)
}

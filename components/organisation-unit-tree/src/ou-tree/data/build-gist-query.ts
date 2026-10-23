import { GIST_RESOURCE } from './constants'

/**
 * A gist query for the given units, headless and sized to the list so it
 * never pages. Shared by the tree API and, later, by a details hook.
 */
export const buildGistQuery = ({
    ids,
    fields,
}: {
    ids: string[]
    fields: string[]
}) => ({
    resource: GIST_RESOURCE,
    params: {
        filter: `id:in:[${ids.join(',')}]`,
        fields: fields.join(','),
        headless: true,
        pageSize: ids.length,
    },
})

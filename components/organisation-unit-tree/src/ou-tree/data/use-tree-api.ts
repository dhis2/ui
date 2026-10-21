import { useDataEngine } from '@dhis2/app-runtime'
import { useMemo } from 'react'
import { buildGistQuery } from './build-gist-query'
import { TREE_RESOURCE } from './resources'
import type { OuTreeQuery, OuTreeResponse } from './types'

export interface NodeEntry {
    id: string
    displayName: string
    path: string
    level: number
    /** From gist's `children::size`, renamed on the way in. */
    childrenCount: number
}

export interface FetchNodesOptions {
    shortName?: boolean
}

export interface TreeApi {
    fetchTreePage(query: OuTreeQuery): Promise<OuTreeResponse>
    /** Looks known units up by id, in one gist request sized to the list. */
    fetchNodes(ids: string[], options: FetchNodesOptions): Promise<NodeEntry[]>
}

interface GistEntry extends Omit<NodeEntry, 'childrenCount'> {
    children: number
}

const gistFields = (shortName: boolean) => [
    'id',
    shortName ? 'displayShortName~rename(displayName)' : 'displayName',
    'path',
    'level',
    'children::size',
]

/** The two requests the tree makes, over the app's data engine. */
export const useTreeApi = (): TreeApi => {
    const engine = useDataEngine()
    return useMemo(
        () => ({
            fetchTreePage: async (query) => {
                const { tree } = await engine.query({
                    // Spread: an interface is not assignable to the engine's
                    // index-signature params type, an object literal is.
                    tree: { resource: TREE_RESOURCE, params: { ...query } },
                })
                return tree as OuTreeResponse
            },
            fetchNodes: async (ids, { shortName = false }) => {
                if (ids.length === 0) {
                    return []
                }
                const { nodes } = await engine.query({
                    nodes: buildGistQuery({
                        ids,
                        fields: gistFields(shortName),
                    }),
                })
                return (nodes as GistEntry[]).map(
                    ({ id, displayName, path, level, children }) => ({
                        id,
                        displayName,
                        path,
                        level,
                        childrenCount: children,
                    })
                )
            },
        }),
        [engine]
    )
}

import type {
    NodeEntry,
    OuTreeQuery,
    OuTreeResponse,
    TreeApi,
} from '../data/index'
import { createInMemoryGist } from './in-memory-gist'
import {
    createInMemoryTreeEndpoint,
    InMemoryTreeEndpointOptions,
} from './in-memory-tree-endpoint'

/** A TreeApi over the stand-in, recording every call. */
export const createTestTreeApi = (options: InMemoryTreeEndpointOptions) => {
    const endpoint = createInMemoryTreeEndpoint(options)
    const gist = createInMemoryGist(options)
    const treeCalls: OuTreeQuery[] = []
    const nodeCalls: string[][] = []
    const api: TreeApi = {
        fetchTreePage: (query) => {
            treeCalls.push(query)
            try {
                return Promise.resolve(endpoint(query))
            } catch (error) {
                return Promise.reject(error)
            }
        },
        fetchNodes: (ids, { shortName }) => {
            nodeCalls.push(ids)
            return Promise.resolve(
                gist(ids, { shortName }).map(({ children, ...entry }) => ({
                    ...entry,
                    childrenCount: children,
                }))
            )
        },
    }
    return { api, treeCalls, nodeCalls }
}

export interface ManualRequest<T, R> {
    input: T
    resolve: (value: R) => void
    reject: (error: unknown) => void
}

/** A TreeApi whose requests settle only when the test says so. */
export const createManualTreeApi = () => {
    const treeRequests: ManualRequest<OuTreeQuery, OuTreeResponse>[] = []
    const nodeRequests: ManualRequest<string[], NodeEntry[]>[] = []
    const api: TreeApi = {
        fetchTreePage: (query) =>
            new Promise((resolve, reject) => {
                treeRequests.push({ input: query, resolve, reject })
            }),
        fetchNodes: (ids) =>
            new Promise((resolve, reject) => {
                nodeRequests.push({ input: ids, resolve, reject })
            }),
    }
    return { api, treeRequests, nodeRequests }
}

/**
 * Builds a tree-page response the way the backend would for `depth=1`: the
 * parent is the first entry of page one only.
 */
export const childrenPage = ({
    parent,
    children,
    total,
    page,
    pageSize,
}: {
    parent: { id: string; path: string; level: number }
    children: Array<{ id: string; displayName: string }>
    total: number
    page: number
    pageSize: number
}): OuTreeResponse => ({
    pager: { page, pageSize, total, pageCount: Math.ceil(total / pageSize) },
    organisationUnits: [
        ...(page === 1
            ? [
                  {
                      id: parent.id,
                      displayName: parent.id,
                      path: parent.path,
                      level: parent.level,
                      leaf: false,
                  },
              ]
            : []),
        ...children.map((child) => ({
            id: child.id,
            displayName: child.displayName,
            path: `${parent.path}/${child.id}`,
            level: parent.level + 1,
            leaf: true,
        })),
    ],
    ancestors: [],
})

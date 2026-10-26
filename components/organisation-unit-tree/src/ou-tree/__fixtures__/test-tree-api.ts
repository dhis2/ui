import type {
    NodeEntry,
    OuTreeChildrenPage,
    OuTreeQuery,
    OuTreeResponse,
    TreeApi,
} from '../data/index'
import { createInMemoryChildrenPages } from './in-memory-children-pages'
import { createInMemoryGist, type GistEntry } from './in-memory-gist'
import {
    createInMemoryTreeEndpoint,
    InMemoryTreeEndpointOptions,
} from './in-memory-tree-endpoint'

export interface ChildrenCall {
    parentId: string
    page: number
    shortName?: boolean
}

const toNodeEntry = ({ children, ...entry }: GistEntry): NodeEntry => ({
    ...entry,
    childrenCount: children,
})

/** A TreeApi over the stand-in, recording every call. */
export const createTestTreeApi = (
    options: InMemoryTreeEndpointOptions & { pageSize?: number }
) => {
    const endpoint = createInMemoryTreeEndpoint(options)
    const gist = createInMemoryGist(options)
    const childrenPages = createInMemoryChildrenPages({
        orgUnits: options.orgUnits,
        pageSize: options.pageSize,
    })
    const treeCalls: OuTreeQuery[] = []
    const nodeCalls: string[][] = []
    const childrenCalls: ChildrenCall[] = []
    const api: TreeApi = {
        fetchTreePage: (query) => {
            treeCalls.push(query)
            try {
                return Promise.resolve(endpoint(query))
            } catch (error) {
                return Promise.reject(error)
            }
        },
        fetchChildrenPage: (parentId, page, { shortName }) => {
            childrenCalls.push({ parentId, page, shortName })
            return Promise.resolve(childrenPages(parentId, { page, shortName }))
        },
        fetchNodes: (ids, { shortName }) => {
            nodeCalls.push(ids)
            return Promise.resolve(gist(ids, { shortName }).map(toNodeEntry))
        },
    }
    return { api, treeCalls, nodeCalls, childrenCalls }
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
    const childrenRequests: ManualRequest<ChildrenCall, OuTreeChildrenPage>[] =
        []
    const api: TreeApi = {
        fetchTreePage: (query) =>
            new Promise((resolve, reject) => {
                treeRequests.push({ input: query, resolve, reject })
            }),
        fetchChildrenPage: (parentId, page, { shortName }) =>
            new Promise((resolve, reject) => {
                childrenRequests.push({
                    input: { parentId, page, shortName },
                    resolve,
                    reject,
                })
            }),
        fetchNodes: (ids) =>
            new Promise((resolve, reject) => {
                nodeRequests.push({ input: ids, resolve, reject })
            }),
    }
    return { api, treeRequests, nodeRequests, childrenRequests }
}

/** Builds a children page the way the children resource would. */
export const childrenPage = ({
    parent,
    children,
    total,
    page,
    pageSize,
}: {
    parent: { path: string; level: number }
    children: Array<{ id: string; displayName: string }>
    total: number
    page: number
    pageSize: number
}): OuTreeChildrenPage => ({
    pager: { page, pageSize, total, pageCount: Math.ceil(total / pageSize) },
    organisationUnits: children.map((child) => ({
        id: child.id,
        displayName: child.displayName,
        path: `${parent.path}/${child.id}`,
        level: parent.level + 1,
        leaf: true,
    })),
})

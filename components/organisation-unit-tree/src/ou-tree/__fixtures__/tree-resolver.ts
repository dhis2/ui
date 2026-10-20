import type { OuTreeQuery } from '../data/index'
import {
    createInMemoryTreeEndpoint,
    InMemoryTreeEndpointOptions,
} from './in-memory-tree-endpoint'

/** The resource name of the tree endpoint, as used with the data engine. */
export const TREE_RESOURCE = 'organisationUnits/tree'

const DEFAULT_PAGE = 1
const DEFAULT_PAGE_SIZE = 50

const toNumber = (name: string, value: unknown): number => {
    const parsed = typeof value === 'number' ? value : Number(value)
    if (typeof value === 'boolean' || value === '' || Number.isNaN(parsed)) {
        throw new Error(`${name} must be a number, got ${String(value)}`)
    }
    return parsed
}

const toBoolean = (name: string, value: unknown): boolean => {
    if (typeof value === 'boolean') {
        return value
    }
    if (value === 'true') {
        return true
    }
    if (value === 'false') {
        return false
    }
    throw new Error(`${name} must be a boolean, got ${String(value)}`)
}

const toList = (name: string, value: unknown): string[] => {
    if (Array.isArray(value)) {
        return value.map(String)
    }
    if (typeof value === 'string') {
        return value
            .split(',')
            .map((item) => item.trim())
            .filter(Boolean)
    }
    throw new Error(`${name} must be a list, got ${String(value)}`)
}

/**
 * Turns request params into a typed query. Accepts the typed shape the tree
 * sends and the string shape a query string (or a form) produces.
 */
export const parseQueryParams = (params: unknown): OuTreeQuery => {
    const raw: Record<string, unknown> =
        typeof params === 'object' && params !== null
            ? (params as Record<string, unknown>)
            : {}
    const query: OuTreeQuery = {
        page:
            raw.page === undefined ? DEFAULT_PAGE : toNumber('page', raw.page),
        pageSize:
            raw.pageSize === undefined
                ? DEFAULT_PAGE_SIZE
                : toNumber('pageSize', raw.pageSize),
    }
    if (raw.locale !== undefined) {
        query.locale = String(raw.locale)
    }
    if (raw.roots !== undefined) {
        query.roots = toList('roots', raw.roots)
    }
    if (raw.depth !== undefined) {
        query.depth = toNumber('depth', raw.depth)
    }
    if (raw.search !== undefined) {
        query.search = String(raw.search)
    }
    if (raw.shortName !== undefined) {
        query.shortName = toBoolean('shortName', raw.shortName)
    }
    if (raw.groups !== undefined) {
        query.groups = toList('groups', raw.groups)
    }
    if (raw.level !== undefined) {
        query.level = toNumber('level', raw.level)
    }
    if (raw.currentlyOpen !== undefined) {
        query.currentlyOpen = toBoolean('currentlyOpen', raw.currentlyOpen)
    }
    return query
}

// The data engine's resolvers return JSON; an OuTreeResponse is one.
type Json = boolean | number | string | null | Json[] | { [key: string]: Json }

/**
 * A `CustomDataProvider` resolver for `TREE_RESOURCE`, backed by the
 * in-memory endpoint:
 * `<CustomDataProvider data={{ [TREE_RESOURCE]: createTreeResolver(options) }}>`.
 */
export const createTreeResolver = (options: InMemoryTreeEndpointOptions) => {
    const endpoint = createInMemoryTreeEndpoint(options)
    return async (_type: string, query: { params?: unknown }): Promise<Json> =>
        endpoint(parseQueryParams(query.params)) as unknown as Json
}

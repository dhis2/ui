import type { OuTreeQuery } from '../data/index'
import {
    createInMemoryTreeEndpoint,
    InMemoryTreeEndpointOptions,
} from './in-memory-tree-endpoint'

const DEFAULT_PAGE = 1
const DEFAULT_PAGE_SIZE = 50

const toNumber = (name: string, value: unknown): number => {
    const parsed = typeof value === 'number' ? value : Number(value)
    if (typeof value === 'boolean' || value === '' || Number.isNaN(parsed)) {
        throw new TypeError(`${name} must be a number, got ${String(value)}`)
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
    throw new TypeError(`${name} must be a boolean, got ${String(value)}`)
}

const toText = (name: string, value: unknown): string => {
    if (typeof value !== 'string') {
        throw new TypeError(`${name} must be a string, got ${String(value)}`)
    }
    return value
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
    throw new TypeError(`${name} must be a list, got ${String(value)}`)
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
        query.locale = toText('locale', raw.locale)
    }
    if (raw.roots !== undefined) {
        query.roots = toList('roots', raw.roots)
    }
    if (raw.depth !== undefined) {
        query.depth = toNumber('depth', raw.depth)
    }
    if (raw.search !== undefined) {
        query.search = toText('search', raw.search)
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
    // `.then` turns a synchronous throw (failWith) into a rejection.
    return (_type: string, query: { params?: unknown }): Promise<Json> =>
        Promise.resolve().then(
            () => endpoint(parseQueryParams(query.params)) as unknown as Json
        )
}

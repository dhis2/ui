/**
 * Request parameters of `GET /api/organisationUnits/tree`. Field names are
 * the backend's, so a query can be sent as request params verbatim.
 * `search` and `depth` are mutually exclusive.
 */
export interface OuTreeQuery {
    /** 1-based page of the direct results. */
    page: number
    /** Direct results per page. */
    pageSize: number
    /** Locale for `displayName` and translation matching. */
    locale?: string
    /** Scope roots. A root under another listed root is ignored. */
    roots?: string[]
    /** Browse mode: the roots plus this many levels below them. */
    depth?: number
    /** Search mode: case- and accent-insensitive match on the display name. */
    search?: string
    /** With `search`: match and return the short name instead. */
    shortName?: boolean
    /** Only direct results that are members of at least one group. */
    groups?: string[]
    /** Only direct results at this absolute level (root = 1). */
    level?: number
    /** Only direct results open for data entry today. */
    currentlyOpen?: boolean
}

export interface OuTreeEntry {
    id: string
    displayName: string
    path: string
    /** Absolute level, root = 1. */
    level: number
    /** True when the unit has no children at all, regardless of scope. */
    leaf: boolean
}

export interface OuTreePager {
    page: number
    pageSize: number
    /** Direct results only; ancestors are not counted. */
    total: number
    pageCount: number
}

export interface OuTreeResponse {
    pager: OuTreePager
    /** The page of direct results, in tree order. */
    organisationUnits: OuTreeEntry[]
    /**
     * Units that are not direct results but are needed to render this page's
     * results under their parents, in tree order. Each is delivered with the
     * first page that needs it.
     */
    ancestors: OuTreeEntry[]
}

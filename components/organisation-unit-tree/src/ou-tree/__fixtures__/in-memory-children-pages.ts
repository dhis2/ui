import type { OuTreeChildrenPage } from '../data/index'
import { CHILDREN_PAGE_SIZE } from '../data/index'
import { countChildren } from './in-memory-gist'
import type { FixtureOrgUnit } from './in-memory-tree-endpoint'

export interface InMemoryChildrenPagesOptions {
    orgUnits: FixtureOrgUnit[]
    /** How the stand-in pages, whatever the request says. */
    pageSize?: number
    /** Throws the returned error for a request, to simulate a failure. */
    failWith?: (parentId: string, page: number) => Error | undefined
}

/**
 * Temporary stand-in for `GET /api/organisationUnits/tree/<id>/children`.
 * The children are ordered by the displayed name, then paged.
 */
export const createInMemoryChildrenPages = ({
    orgUnits,
    pageSize = CHILDREN_PAGE_SIZE,
    failWith,
}: InMemoryChildrenPagesOptions) => {
    const childrenCount = countChildren(orgUnits)
    return (
        parentId: string,
        { page, shortName = false }: { page: number; shortName?: boolean }
    ): OuTreeChildrenPage => {
        const failure = failWith?.(parentId, page)
        if (failure) {
            throw failure
        }
        const shown = (unit: FixtureOrgUnit) =>
            shortName ? unit.shortName : unit.name
        const children = orgUnits
            .filter((unit) => unit.parentId === parentId)
            .sort((a, b) => shown(a).localeCompare(shown(b), 'en'))
        const start = (page - 1) * pageSize
        return {
            pager: {
                page,
                pageSize,
                total: children.length,
                pageCount: Math.ceil(children.length / pageSize),
            },
            organisationUnits: children
                .slice(start, start + pageSize)
                .map((unit) => ({
                    id: unit.id,
                    displayName: shown(unit),
                    path: unit.path,
                    level: unit.level,
                    leaf: !childrenCount.has(unit.id),
                })),
        }
    }
}

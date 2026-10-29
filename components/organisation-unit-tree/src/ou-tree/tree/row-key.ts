import type { Row } from './flatten-rows'

/**
 * A row's identity: stable when rows above it appear or disappear, so a
 * row keeps its element and its measured height across rebuilds.
 */
export const rowKey = (row: Row): string => {
    switch (row.kind) {
        case 'node':
            return row.id
        case 'skeleton':
            return `skeleton:${row.parentId}:${row.index}`
        case 'error':
            return `error:${row.parentId}:${row.index}`
        case 'result-skeleton':
            return `result-skeleton:${row.index}`
        case 'result-error':
            return `result-error:${row.index}`
    }
}

import type { Row } from '../tree/index'

/** A row's identity, stable when rows above it appear or disappear. */
export const rowKey = (row: Row, rowIndex: number): string => {
    switch (row.kind) {
        case 'node':
            return row.id
        case 'skeleton':
            return `skeleton:${row.parentId}:${row.index}`
        case 'error':
            return `error:${row.parentId}:${row.page}:${rowIndex}`
    }
}

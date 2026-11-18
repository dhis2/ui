import { useVirtualizer } from '@tanstack/react-virtual'
import { useCallback, useEffect, useMemo } from 'react'
import { rowKey, useOuTree } from '../tree'

const ESTIMATED_ROW_SIZE = 24

export interface OuTreeVirtualRowsOptions {
    scrollRef: React.RefObject<HTMLElement>
    overscan?: number
}

export interface OuTreeVirtualItem {
    index: number
    start: number
    key: string | number
}

export interface OuTreeVirtualRows {
    virtualItems: OuTreeVirtualItem[]
    totalSize: number
    /** The ref of each positioned row element, which also has `data-index`. */
    measureElement: (element: Element | null) => void
    /** Scrolls the row into view, as little as needed. */
    scrollToIndex: (index: number) => void
    /** The first row in the viewport, before overscan; undefined without rows. */
    firstVisibleIndex: number | undefined
}

/**
 * Virtualises the tree's rows over a scroll element, measuring rows as they
 * render, and requests the children pages behind the visible range.
 */
export const useOuTreeVirtualRows = ({
    scrollRef,
    overscan = 10,
}: OuTreeVirtualRowsOptions): OuTreeVirtualRows => {
    const tree = useOuTree()
    // The virtualiser rebuilds its measurements for every row when this
    // function changes, so it changes only with the tree, never on scroll.
    const getItemKey = useCallback(
        (index: number) => rowKey(tree.getRow(index)),
        [tree]
    )
    const virtualizer = useVirtualizer({
        count: tree.rowCount,
        getScrollElement: () => scrollRef.current,
        estimateSize: () => ESTIMATED_ROW_SIZE,
        overscan,
        getItemKey,
    })
    const items = virtualizer.getVirtualItems()
    const first = items[0]?.index
    const last = items[items.length - 1]?.index

    useEffect(() => {
        if (first === undefined || last === undefined) {
            return
        }
        tree.ensureChildrenLoaded(first, last)
    }, [tree, first, last])

    const totalSize = virtualizer.getTotalSize()
    const { measureElement } = virtualizer
    const scrollToIndex = useCallback(
        (index: number) => virtualizer.scrollToIndex(index, { align: 'auto' }),
        [virtualizer]
    )
    const firstVisibleIndex = virtualizer.range?.startIndex
    return useMemo(
        () => ({
            virtualItems: items.map(({ index, start, key }) => ({
                index,
                start,
                key: key as string | number,
            })),
            totalSize,
            measureElement,
            scrollToIndex,
            firstVisibleIndex,
        }),
        [items, totalSize, measureElement, scrollToIndex, firstVisibleIndex]
    )
}

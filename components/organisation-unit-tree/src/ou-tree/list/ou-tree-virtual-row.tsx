import React from 'react'
import type { OuTreeVirtualItem } from './use-ou-tree-virtual-rows'

export interface OuTreeVirtualRowProps {
    item: OuTreeVirtualItem
    /** The virtualiser's measurer; it reads `data-index` off the element. */
    measureElement: (element: Element | null) => void
    children?: React.ReactNode
}

/**
 * Places one row at its offset in the sizer and lets the virtualiser measure
 * it. The row inside knows nothing about virtual positions.
 */
export const OuTreeVirtualRow = ({
    item,
    measureElement,
    children,
}: OuTreeVirtualRowProps) => (
    <div
        className="positioned"
        data-index={item.index}
        ref={measureElement}
        style={{ transform: `translateY(${item.start}px)` }}
    >
        {children}
        <style jsx>{`
            .positioned {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
            }
        `}</style>
    </div>
)

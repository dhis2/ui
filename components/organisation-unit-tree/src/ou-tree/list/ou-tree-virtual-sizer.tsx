import React from 'react'

export interface OuTreeVirtualSizerProps {
    /** The height of every row together, measured or estimated. */
    height: number
    children?: React.ReactNode
}

/**
 * The box the virtual rows are placed in. It is as tall as all the rows
 * would be, so the scrollbar is right while only the rows near the viewport
 * exist.
 */
export const OuTreeVirtualSizer = ({
    height,
    children,
}: OuTreeVirtualSizerProps) => (
    <div className="sizer" style={{ height }}>
        {children}
        <style jsx>{`
            .sizer {
                position: relative;
                width: 100%;
            }
        `}</style>
    </div>
)

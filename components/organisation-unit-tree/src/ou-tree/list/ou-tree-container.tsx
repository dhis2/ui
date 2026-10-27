import cx from 'classnames'
import React, { forwardRef } from 'react'

export interface OuTreeContainerProps {
    className?: string
    dataTest?: string
    children?: React.ReactNode
}

/**
 * The tree's scroll element: fills its box, so the box needs a height. The
 * ref is the virtualiser's scroll element.
 */
export const OuTreeContainer = forwardRef<HTMLDivElement, OuTreeContainerProps>(
    function OuTreeContainer({ className, dataTest, children }, ref) {
        return (
            <div
                ref={ref}
                role="tree"
                data-test={dataTest}
                className={cx('container', className)}
            >
                {children}
                <style jsx>{`
                    .container {
                        height: 100%;
                        width: 100%;
                        overflow: auto;
                        position: relative;
                    }
                `}</style>
            </div>
        )
    }
)

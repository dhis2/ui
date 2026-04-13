import cx from 'classnames'
import React, { forwardRef } from 'react'

export interface CenterProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
    /** Vertical alignment */
    position?: 'top' | 'middle' | 'bottom'
}

export const Center = forwardRef<HTMLDivElement, CenterProps>(
    (
        {
            className,
            dataTest = 'dhis2-uicore-centeredcontent',
            children,
            position = 'middle',
        },
        ref
    ) => (
        <div
            className={cx('center', className, position)}
            data-test={dataTest}
            ref={ref}
        >
            <div className="center-inner-content">{children}</div>

            <style jsx>{`
                .center {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: space-around;
                    flex-direction: row;
                    pointer-events: none;
                    align-items: center;
                }
                .center.top {
                    align-items: flex-start;
                }
                .center.bottom {
                    align-items: flex-end;
                }
                .center-inner-content {
                    pointer-events: all;
                }
            `}</style>
        </div>
    )
)

Center.displayName = 'Center'

import { colors, spacers } from '@dhis2/ui-constants'
import cx from 'classnames'
import React, { forwardRef } from 'react'

export interface TableToolbarProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
    position?: 'top' | 'bottom'
}

export const TableToolbar = forwardRef<HTMLDivElement, TableToolbarProps>(
    (
        {
            children,
            className,
            dataTest = 'dhis2-uicore-tabletoolbar',
            position = 'top',
            ...props
        },
        ref
    ) => (
        <div
            {...props}
            data-test={dataTest}
            className={cx(className, position)}
            ref={ref}
        >
            {children}
            <style jsx>{`
                div {
                    width: 100%;
                    box-sizing: border-box;
                    display: flex;
                    border: 1px solid ${colors.grey300};
                    padding: ${spacers.dp12};
                }
                div.top {
                    border-bottom: none;
                }
                div.bottom {
                    border-top: none;
                }
            `}</style>
        </div>
    )
)

TableToolbar.displayName = 'TableToolbar'

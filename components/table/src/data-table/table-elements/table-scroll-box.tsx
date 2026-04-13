import { colors } from '@dhis2/ui-constants'
import React, { forwardRef } from 'react'

export interface TableScrollBoxProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
    maxHeight?: string
    maxWidth?: string
}

export const TableScrollBox = forwardRef<HTMLDivElement, TableScrollBoxProps>(
    (
        {
            children,
            className,
            dataTest = 'dhis2-uicore-tablescrollbox',
            maxHeight = 'auto',
            maxWidth = 'auto',
            ...props
        },
        ref
    ) => (
        <div {...props} className={className} data-test={dataTest} ref={ref}>
            {children}
            <style jsx>{`
                div {
                    border: 1px solid ${colors.grey300};
                    border-top: none;
                    box-sizing: border-box;
                    max-height: ${maxHeight};
                    max-width: ${maxWidth};
                    overflow: auto;
                }
            `}</style>
        </div>
    )
)

TableScrollBox.displayName = 'TableScrollBox'

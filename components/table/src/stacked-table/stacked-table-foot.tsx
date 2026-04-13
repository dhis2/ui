import React from 'react'

export interface StackedTableFootProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
}

export const StackedTableFoot: React.FC<StackedTableFootProps> = ({
    children,
    className,
    dataTest = 'dhis2-uicore-stackedtablefoot',
}) => (
    <tfoot className={className} data-test={dataTest}>
        {children}
        <style jsx>{`
            tfoot {
                display: block;
                margin-top: 32px;
            }
        `}</style>
    </tfoot>
)

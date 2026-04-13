import React from 'react'

export interface StackedTableBodyProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
}

export const StackedTableBody: React.FC<StackedTableBodyProps> = ({
    children,
    className,
    dataTest = 'dhis2-uicore-stackedtablebody',
}) => (
    <tbody className={className} data-tset={dataTest}>
        {children}
        <style jsx>{`
            tbody {
                display: block;
            }
        `}</style>
    </tbody>
)

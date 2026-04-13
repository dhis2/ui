import React from 'react'

export interface StackedTableHeadProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
}

export const StackedTableHead: React.FC<StackedTableHeadProps> = ({
    children,
    className,
    dataTest = 'dhis2-uicore-stackedtablehead',
}) => (
    <thead className={className} data-test={dataTest}>
        {children}
        <style jsx>{`
            thead {
                display: none;
            }
        `}</style>
    </thead>
)

import propTypes from '@dhis2/prop-types'
import React from 'react'

export const StackedTableHead = ({ children, className, dataTest }) => (
    <thead className={className} data-test={dataTest}>
        {children}
        <style jsx>{`
            thead {
                display: none;
            }
        `}</style>
    </thead>
)

StackedTableHead.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
}

StackedTableHead.defaultProps = {
    dataTest: 'dhis2-uicore-stackedtablehead',
}

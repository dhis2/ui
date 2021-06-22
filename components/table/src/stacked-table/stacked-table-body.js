import propTypes from '@dhis2/prop-types'
import React from 'react'

export const StackedTableBody = ({ children, className, dataTest }) => (
    <tbody className={className} data-tset={dataTest}>
        {children}
        <style jsx>{`
            tbody {
                display: block;
            }
        `}</style>
    </tbody>
)

StackedTableBody.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
}

StackedTableBody.defaultProps = {
    dataTest: 'dhis2-uicore-stackedtablebody',
}

import PropTypes from 'prop-types'
import React from 'react'

export const StackedTableBody = ({
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

StackedTableBody.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
}

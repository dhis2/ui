import PropTypes from 'prop-types'
import React from 'react'

export const StackedTableHead = ({
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

StackedTableHead.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
}

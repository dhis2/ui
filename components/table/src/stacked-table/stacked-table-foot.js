import PropTypes from 'prop-types'
import React from 'react'

export const StackedTableFoot = ({
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

StackedTableFoot.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
}

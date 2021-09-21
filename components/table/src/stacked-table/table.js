import { colors } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

export const Table = ({ children, className, dataTest }) => (
    <table className={className} data-test={dataTest}>
        {children}

        <style jsx>{`
            table {
                display: block;
                border: 0;
                background-color: ${colors.white};
                min-width: 100%;
                text-align: left;
                border-collapse: collapse;
                vertical-align: top;
                color: ${colors.grey900};
            }
        `}</style>
    </table>
)

Table.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    dataTest: PropTypes.string,
}

import propTypes from '@dhis2/prop-types'
import { colors } from '@dhis2/ui-constants'
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
    children: propTypes.node.isRequired,
    className: propTypes.string,
    dataTest: propTypes.string,
}

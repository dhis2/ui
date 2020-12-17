import React from 'react'
import propTypes from '@dhis2/prop-types'

/**
 * @module
 * @returns {React.Component}
 */
export const Empty = ({ dataTest }) => (
    <svg
        height="18px"
        version="1.1"
        viewBox="0 0 18 18"
        width="18px"
        data-test={`${dataTest}-iconempty`}
    >
        <g
            fill="none"
            fillRule="evenodd"
            id="icon/empty"
            stroke="none"
            strokeWidth="1"
        />

        <style jsx>{`
            svg {
                display: block;
                margin: 3px 0;
            }
        `}</style>
    </svg>
)

Empty.propTypes = {
    dataTest: propTypes.string.isRequired,
}

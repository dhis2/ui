import PropTypes from 'prop-types'
import React from 'react'

export const IconEmpty = ({ dataTest }) => (
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

IconEmpty.propTypes = {
    dataTest: PropTypes.string.isRequired,
}

import PropTypes from 'prop-types'
import React from 'react'

export const IconSingle = ({ dataTest }) => (
    <svg
        height="18px"
        version="1.1"
        viewBox="0 0 18 18"
        width="18px"
        data-test={`${dataTest}-iconsingle`}
    >
        <g
            fill="none"
            fillRule="evenodd"
            id="icon/single"
            stroke="none"
            strokeWidth="1"
        >
            <rect
                fill="#A0ADBA"
                height="4"
                id="Rectangle"
                rx="1"
                width="4"
                x="7"
                y="7"
            />
        </g>

        <style jsx>{`
            svg {
                display: block;
                margin: 3px 0;
            }
        `}</style>
    </svg>
)

IconSingle.propTypes = {
    dataTest: PropTypes.string.isRequired,
}

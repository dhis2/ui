import React from 'react'
import propTypes from '@dhis2/prop-types'

/**
 * @module
 * @returns {React.Component}
 */
export const Single = ({ dataTest }) => (
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

Single.propTypes = {
    dataTest: propTypes.string.isRequired,
}

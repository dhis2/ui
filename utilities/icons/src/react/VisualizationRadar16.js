import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgVisualizationRadar16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <g fill="currentColor" fillRule="evenodd">
                <path
                    d="M8 1a7 7 0 110 14A7 7 0 018 1zm0 1a6 6 0 100 12A6 6 0 008 2zm0 3a3 3 0 110 6 3 3 0 010-6zm0 1a2 2 0 100 4 2 2 0 000-4z"
                    fillRule="nonzero"
                />
                <path d="M4 10a2 2 0 110 4 2 2 0 010-4zM8 0a2 2 0 110 4 2 2 0 010-4z" />
            </g>
        </svg>
    )
}

SvgVisualizationRadar16.propTypes = {
    color: propTypes.string,
}
export default SvgVisualizationRadar16

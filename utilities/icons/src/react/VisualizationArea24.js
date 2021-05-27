import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgVisualizationArea24({ color }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            color={color}
        >
            <path
                fill="currentColor"
                d="M4 2v18h18v2H2V2h2zm2 2l5 7 5-4 6 7v4H6V4z"
            />
        </svg>
    )
}

SvgVisualizationArea24.propTypes = {
    color: propTypes.string,
}
export default SvgVisualizationArea24

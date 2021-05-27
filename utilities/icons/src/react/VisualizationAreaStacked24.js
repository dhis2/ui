import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgVisualizationAreaStacked24({ color }) {
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
                d="M4 2v18h18v2H2V2h2zm18 10v6H6v-4l5-2 5 4 6-4zM6 3l5 3 5-2 6 4v2l-6 4-5-4-5 2V3z"
            />
        </svg>
    )
}

SvgVisualizationAreaStacked24.propTypes = {
    color: propTypes.string,
}
export default SvgVisualizationAreaStacked24

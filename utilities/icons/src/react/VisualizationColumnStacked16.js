import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgVisualizationColumnStacked16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <g fill="currentColor" fillRule="evenodd">
                <path d="M0 0h1v15h15v1H0z" />
                <path d="M6 13v2H3v-2zm5-4v6H8V9zm5-1v7h-3V8zM6 7v5H3V7zm5-6v7H8V1zm5 3v3h-3V4z" />
            </g>
        </svg>
    )
}

SvgVisualizationColumnStacked16.propTypes = {
    color: propTypes.string,
}
export default SvgVisualizationColumnStacked16

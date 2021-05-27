import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgVisualizationBarStacked16({ color }) {
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
                <path d="M7 10v3H1v-3zm7 0v3H8v-3zM4 5v3H1V5zm7 0v3H5V5zM5 0v3H1V0zm4 0v3H6V0z" />
            </g>
        </svg>
    )
}

SvgVisualizationBarStacked16.propTypes = {
    color: propTypes.string,
}
export default SvgVisualizationBarStacked16

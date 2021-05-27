import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgVisualizationBar16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M1 5h10v3H1v2h13v3H1v2h15v1H0V0h6v3H1z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    )
}

SvgVisualizationBar16.propTypes = {
    color: propTypes.string,
}
export default SvgVisualizationBar16

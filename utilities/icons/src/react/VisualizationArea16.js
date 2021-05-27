import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgVisualizationArea16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M1 0v15h15v1H0V0zm1 3l4 5 4-2 5 5v3H2z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    )
}

SvgVisualizationArea16.propTypes = {
    color: propTypes.string,
}
export default SvgVisualizationArea16

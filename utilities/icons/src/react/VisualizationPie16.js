import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgVisualizationPie16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M7.586 9l5.32 5.32A8.001 8.001 0 01.062 9zM9 .062a8.001 8.001 0 015.32 12.844L9 7.585zm-2 0V7H.062A8.004 8.004 0 017 .062z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    )
}

SvgVisualizationPie16.propTypes = {
    color: propTypes.string,
}
export default SvgVisualizationPie16

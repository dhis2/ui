import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgVisualizationPie24({ color }) {
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
                fillRule="evenodd"
                d="M13 2.05c5.053.501 9 4.765 9 9.95 0 5.523-4.477 10-10 10-5.185 0-9.449-3.947-9.95-9h9.535l6.708 6.707 1.414-1.414L13 11.585zm-2 0V11H2.05A10.003 10.003 0 0111 2.05z"
            />
        </svg>
    )
}

SvgVisualizationPie24.propTypes = {
    color: propTypes.string,
}
export default SvgVisualizationPie24

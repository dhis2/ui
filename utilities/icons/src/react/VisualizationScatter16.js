import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgVisualizationScatter16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M1 0v15h15v1H0V0zm5 11a1 1 0 110 2 1 1 0 010-2zm7-2a1 1 0 110 2 1 1 0 010-2zM3 8a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm4-4a1 1 0 110 2 1 1 0 010-2zM6 4a1 1 0 110 2 1 1 0 010-2zm7-2a1 1 0 110 2 1 1 0 010-2z"
                fill="#4a5768"
                fillRule="evenodd"
            />
        </svg>
    )
}

SvgVisualizationScatter16.propTypes = {
    color: propTypes.string,
}
export default SvgVisualizationScatter16

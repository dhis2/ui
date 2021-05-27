import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgDimensionProgramIndicator16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M14 10v4h-4v-4zm-1 1h-2v2h2zM9 2v2H2v7h7v1H1V2zm6 6v1H9V8zm-1-5v4h-4V3zm-1 1h-2v2h2z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    )
}

SvgDimensionProgramIndicator16.propTypes = {
    color: propTypes.string,
}
export default SvgDimensionProgramIndicator16

import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgError16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M8 1a7 7 0 110 14A7 7 0 018 1zm0 1a6 6 0 100 12A6 6 0 008 2zm0 8a1 1 0 110 2 1 1 0 010-2zm.5-6v5h-1V4z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgError16.propTypes = {
    color: propTypes.string,
}
export default SvgError16

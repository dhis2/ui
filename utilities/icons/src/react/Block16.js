import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgBlock16({ color }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            color={color}
        >
            <path
                fill="currentColor"
                d="M8 1a7 7 0 110 14A7 7 0 018 1zM2 8a6 6 0 009.875 4.581L3.419 4.125A5.976 5.976 0 002 8zm6-6c-1.477 0-2.83.534-3.875 1.419l8.456 8.456A6 6 0 008 2z"
            />
        </svg>
    )
}

SvgBlock16.propTypes = {
    color: propTypes.string,
}
export default SvgBlock16

import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgQuestion16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M8 1a7 7 0 110 14A7 7 0 018 1zm0 1a6 6 0 100 12A6 6 0 008 2zm0 9a1 1 0 110 2 1 1 0 010-2zm0-7.5a2.5 2.5 0 01.64 4.918l-.14.031V10h-1V7.5H8a1.5 1.5 0 10-1.493-1.644L6.5 6h-1A2.5 2.5 0 018 3.5z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgQuestion16.propTypes = {
    color: propTypes.string,
}
export default SvgQuestion16

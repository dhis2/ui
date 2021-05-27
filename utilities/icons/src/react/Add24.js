import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgAdd24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M12 3a1 1 0 011 1v7h7a1 1 0 010 2h-7v7a1 1 0 01-2 0v-7H4a1 1 0 010-2h7V4a1 1 0 011-1z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    )
}

SvgAdd24.propTypes = {
    color: propTypes.string,
}
export default SvgAdd24

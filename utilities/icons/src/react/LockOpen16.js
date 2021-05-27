import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgLockOpen16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M8 1a3 3 0 013 3h-1a2 2 0 00-3.995-.15L6 4v2h6c.552 0 1 .504 1 1.125v6.75c0 .621-.448 1.125-1 1.125H4c-.552 0-1-.504-1-1.125v-6.75C3 6.504 3.448 6 4 6h1V4a3 3 0 013-3zm4 6H4v7h8z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgLockOpen16.propTypes = {
    color: propTypes.string,
}
export default SvgLockOpen16

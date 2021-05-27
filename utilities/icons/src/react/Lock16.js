import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgLock16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M8 1a3 3 0 013 3v2h1c.552 0 1 .504 1 1.125v6.75c0 .621-.448 1.125-1 1.125H4c-.552 0-1-.504-1-1.125v-6.75C3 6.504 3.448 6 4 6h1V4a3 3 0 013-3zm4 6H4v7h8zM8 9a1 1 0 110 2 1 1 0 010-2zm0-7a2 2 0 00-1.995 1.85L6 4v2h4V4a2 2 0 00-2-2z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgLock16.propTypes = {
    color: propTypes.string,
}
export default SvgLock16

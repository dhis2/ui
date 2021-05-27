import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgLink16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M9.354 4.646a3.329 3.329 0 01.139 4.56l-.14.148-.707-.708a2.328 2.328 0 00-3.165-3.41l-.127.118-3 3a2.328 2.328 0 003.165 3.41l.127-.118.708.708a3.328 3.328 0 01-4.847-4.56l.14-.148 3-3c1.3-1.3 3.407-1.3 4.707 0zm5-2a3.329 3.329 0 01.139 4.56l-.14.148-3 3a3.328 3.328 0 01-4.846-4.56l.14-.148.707.708a2.328 2.328 0 003.165 3.41l.127-.118 3-3a2.328 2.328 0 00-3.165-3.41l-.127.118-.708-.708c1.3-1.3 3.408-1.3 4.708 0z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgLink16.propTypes = {
    color: propTypes.string,
}
export default SvgLink16

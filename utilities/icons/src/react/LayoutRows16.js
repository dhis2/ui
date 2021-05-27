import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgLayoutRows16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M13 1a1 1 0 011 1v11a1 1 0 01-1 1H3a1 1 0 01-1-1V2a1 1 0 011-1zM3 11v2h10v-2zm10-6H3v2h10zm0-3H3v2h10zM3 10h10V8H3z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgLayoutRows16.propTypes = {
    color: propTypes.string,
}
export default SvgLayoutRows16

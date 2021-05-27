import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgThumbUp16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M9.22 2a1 1 0 01.97.757L11 6h2a2 2 0 012 2v2a4 4 0 01-4 4H1V7h3l3-2V2zM4 8H2v5h2zm5.219-5H8v2.535l-3 2V13h6a3 3 0 002.995-2.824L14 10V8a1 1 0 00-.883-.993L13 7h-2.78z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgThumbUp16.propTypes = {
    color: propTypes.string,
}
export default SvgThumbUp16

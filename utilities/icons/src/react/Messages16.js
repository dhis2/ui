import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgMessages16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M14 3a1 1 0 011 1v6a1 1 0 01-1 1h-1v2.15a1 1 0 01-1.78.624L9 11H4a1 1 0 01-1-1V4a1 1 0 011-1zm0 1H4v6h5.48L12 13.15V10h2zm-4-3v1H2.5a.5.5 0 00-.492.41L2 2.5V8H1V2.5a1.5 1.5 0 011.356-1.493L2.5 1z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgMessages16.propTypes = {
    color: propTypes.string,
}
export default SvgMessages16

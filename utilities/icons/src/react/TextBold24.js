import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgTextBold24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M7 5h6a4 4 0 013.063 6.573A4 4 0 0114 19H7zm7 8H9v4h5a2 2 0 00.15-3.995zm-1-6H9v4h4a2 2 0 00.15-3.995z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgTextBold24.propTypes = {
    color: propTypes.string,
}
export default SvgTextBold24

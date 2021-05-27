import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgTextItalic24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M13.5 7H10V5h9v2h-3.5l-5 10H14v2H5v-2h3.5z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgTextItalic24.propTypes = {
    color: propTypes.string,
}
export default SvgTextItalic24

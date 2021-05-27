import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgTextItalic16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M13 3v1h-2.691l-3.5 7H9v1H3v-1h2.69l3.5-7H7V3z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgTextItalic16.propTypes = {
    color: propTypes.string,
}
export default SvgTextItalic16

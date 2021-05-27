import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgSearch16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M6 1a5 5 0 013.871 8.164l4.483 4.482-.708.708L9.164 9.87A5 5 0 116 1zm0 1a4 4 0 100 8 4 4 0 000-8z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgSearch16.propTypes = {
    color: propTypes.string,
}
export default SvgSearch16

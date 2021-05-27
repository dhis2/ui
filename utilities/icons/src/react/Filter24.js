import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgFilter24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M14 16l-1 2h-2l-1-2zm4-5l-1 2H7l-1-2zm3-5l-1 2H4L3 6z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    )
}

SvgFilter24.propTypes = {
    color: propTypes.string,
}
export default SvgFilter24

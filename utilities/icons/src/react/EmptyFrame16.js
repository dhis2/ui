import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgEmptyFrame16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M4 15H2a1 1 0 01-1-1v-2h1v2h2zm5.5-1v1h-3v-1zm4.5 0v-2h1v2a1 1 0 01-1 1h-2v-1zM1 6.5h1v3H1zm13 0h1v3h-1zM14 2h-2V1h2a1 1 0 011 1v2h-1zM6.5 2V1h3v1zM2 2v2H1V2a1 1 0 011-1h2v1z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgEmptyFrame16.propTypes = {
    color: propTypes.string,
}
export default SvgEmptyFrame16

import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgQuestion24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm0 12a1 1 0 110 2 1 1 0 010-2zm0-10a4 4 0 011.155 7.83l-.155.043V15h-2v-3h1a2 2 0 10-1.995-2.15L10 10H8a4 4 0 014-4z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgQuestion24.propTypes = {
    color: propTypes.string,
}
export default SvgQuestion24

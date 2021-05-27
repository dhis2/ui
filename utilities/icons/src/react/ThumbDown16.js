import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgThumbDown16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M11 2a4 4 0 014 4v2a2 2 0 01-2 2h-2l-1 4H7v-3L4 9H1V2zM2 3v5h2V3zm3 5.465l3 2V13h1.218l1.001-4H13a1 1 0 00.993-.883L14 8V6a3 3 0 00-2.824-2.995L11 3H5z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgThumbDown16.propTypes = {
    color: propTypes.string,
}
export default SvgThumbDown16

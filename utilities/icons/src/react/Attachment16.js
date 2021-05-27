import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgAttachment16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M7 1a3 3 0 012.995 2.824L10 4v7a2 2 0 01-3.995.15L6 11V5a.5.5 0 01.992-.09L7 5v6a1 1 0 001.993.117L9 11V4a2 2 0 00-3.995-.15L5 4v7a3 3 0 005.995.176L11 11V5a.5.5 0 01.992-.09L12 5v6a4 4 0 01-7.995.2L4 11V4a3 3 0 013-3z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgAttachment16.propTypes = {
    color: propTypes.string,
}
export default SvgAttachment16

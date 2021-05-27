import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgDragHandle16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M6 11a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2zM6 7a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2zM6 3a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    )
}

SvgDragHandle16.propTypes = {
    color: propTypes.string,
}
export default SvgDragHandle16

import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgDelete16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M13.5 3a.5.5 0 110 1H13v10a1 1 0 01-1 1H4a1 1 0 01-1-1V4h-.5a.5.5 0 010-1zM12 4H4v10h8zM7 6v6H6V6zm3 0v6H9V6zm-.5-5a.5.5 0 010 1h-3a.5.5 0 010-1z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgDelete16.propTypes = {
    color: propTypes.string,
}
export default SvgDelete16

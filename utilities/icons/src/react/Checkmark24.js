import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgCheckmark24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M19.293 6.293a1 1 0 011.497 1.32l-.083.094-10 10a1 1 0 01-1.32.083l-.094-.083-5-5a1 1 0 011.32-1.497l.094.083L10 15.585z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgCheckmark24.propTypes = {
    color: propTypes.string,
}
export default SvgCheckmark24

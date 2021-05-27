import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgDuplicate16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M2.177 5.43a7.003 7.003 0 00-.093 2.656 5 5 0 005.832 5.83 7.01 7.01 0 002.654-.093A6 6 0 012.177 5.43zM9 1a6 6 0 110 12A6 6 0 019 1zm0 1a5 5 0 100 10A5 5 0 009 2zm0 1a1 1 0 01.993.883L10 4v2h2a1 1 0 01.117 1.993L12 8h-2v2a1 1 0 01-1.993.117L8 10V8H6a1 1 0 01-.117-1.993L6 6h2V4a1 1 0 011-1z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgDuplicate16.propTypes = {
    color: propTypes.string,
}
export default SvgDuplicate16

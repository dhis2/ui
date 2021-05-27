import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgCross24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M6.613 5.21l.094.083L12 10.585l5.293-5.292a1 1 0 011.497 1.32l-.083.094L13.415 12l5.292 5.293a1 1 0 01-1.32 1.497l-.094-.083L12 13.415l-5.293 5.292a1 1 0 01-1.497-1.32l.083-.094L10.585 12 5.293 6.707a1 1 0 011.32-1.497z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgCross24.propTypes = {
    color: propTypes.string,
}
export default SvgCross24

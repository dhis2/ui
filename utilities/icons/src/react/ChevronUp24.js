import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgChevronUp24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M11.293 8.293a1 1 0 011.32-.083l.094.083 5 5a1 1 0 01-1.32 1.497l-.094-.083L12 10.415l-4.293 4.292a1 1 0 01-1.32.083l-.094-.083a1 1 0 01-.083-1.32l.083-.094z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgChevronUp24.propTypes = {
    color: propTypes.string,
}
export default SvgChevronUp24

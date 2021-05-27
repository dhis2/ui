import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgArrowUp24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M12.613 4.21l.094.083 6 6a1 1 0 01-1.32 1.497l-.094-.083L13 7.415V19a1 1 0 01-1.993.117L11 19V7.413l-4.293 4.294a1 1 0 01-1.32.083l-.094-.083a1 1 0 01-.083-1.32l.083-.094 6-6a1 1 0 011.32-.083z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgArrowUp24.propTypes = {
    color: propTypes.string,
}
export default SvgArrowUp24

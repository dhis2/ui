import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgReorder24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M8 6.5a1 1 0 01.993.883L9 7.5v9.084l1.293-1.291a1 1 0 011.32-.083l.094.083a1 1 0 01.083 1.32l-.083.094-3 3a1 1 0 01-1.32.083l-.094-.083-3-3a1 1 0 011.32-1.497l.094.083L7 16.586V7.5a1 1 0 011-1zm8.613-2.29l.094.083 3 3a1 1 0 01-1.32 1.497l-.094-.083L17 7.415V17a1 1 0 01-1.993.117L15 17V7.413l-1.293 1.294a1 1 0 01-1.32.083l-.094-.083a1 1 0 01-.083-1.32l.083-.094 3-3a1 1 0 011.32-.083z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgReorder24.propTypes = {
    color: propTypes.string,
}
export default SvgReorder24

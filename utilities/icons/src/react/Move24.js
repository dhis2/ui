import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgMove24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M6.707 14.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.32.083l-.094-.083-3-3a1 1 0 01-.083-1.32l.083-.094 3-3a1 1 0 011.497 1.32l-.083.094L5.414 11H11V5.414L9.707 6.707a1 1 0 01-1.32.083l-.094-.083a1 1 0 01-.083-1.32l.083-.094 3-3a1 1 0 011.32-.083l.094.083 3 3a1 1 0 01-1.32 1.497l-.094-.083L13 5.416V11h5.585l-1.292-1.293a1 1 0 01-.083-1.32l.083-.094a1 1 0 011.32-.083l.094.083 3 3a1 1 0 01.083 1.32l-.083.094-3 3a1 1 0 01-1.497-1.32l.083-.094L18.585 13H13v5.584l1.293-1.291a1 1 0 011.32-.083l.094.083a1 1 0 01.083 1.32l-.083.094-3 3a1 1 0 01-1.32.083l-.094-.083-3-3a1 1 0 011.32-1.497l.094.083L11 18.586V13H5.414z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgMove24.propTypes = {
    color: propTypes.string,
}
export default SvgMove24

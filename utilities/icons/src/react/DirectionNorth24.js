import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgDirectionNorth24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M12 8a7 7 0 110 14 7 7 0 010-14zm0 2a5 5 0 100 10 5 5 0 000-10zm-1 2l2 3v-3h2v6h-2l-2-3v3H9v-6zm1.613-9.79l.094.083 3.5 3.5a1 1 0 01-1.32 1.497l-.094-.083L12 4.415 9.207 7.207a1 1 0 01-1.32.083l-.094-.083a1 1 0 01-.083-1.32l.083-.094 3.5-3.5a1 1 0 011.32-.083z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgDirectionNorth24.propTypes = {
    color: propTypes.string,
}
export default SvgDirectionNorth24

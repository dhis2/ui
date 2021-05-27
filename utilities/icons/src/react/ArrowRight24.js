import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgArrowRight24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M13.613 5.21l.094.083 6 6a1 1 0 01.083 1.32l-.083.094-6 6a1 1 0 01-1.497-1.32l.083-.094L16.584 13H5a1 1 0 01-.117-1.993L5 11h11.586l-4.293-4.293a1 1 0 01-.083-1.32l.083-.094a1 1 0 011.32-.083z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgArrowRight24.propTypes = {
    color: propTypes.string,
}
export default SvgArrowRight24

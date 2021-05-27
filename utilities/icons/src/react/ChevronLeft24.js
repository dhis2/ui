import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgChevronLeft24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M13.293 6.293a1 1 0 011.497 1.32l-.083.094L10.415 12l4.292 4.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.32.083l-.094-.083-5-5a1 1 0 01-.083-1.32l.083-.094z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgChevronLeft24.propTypes = {
    color: propTypes.string,
}
export default SvgChevronLeft24

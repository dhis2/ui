import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgChevronDown24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M11.293 15.707a1 1 0 001.414 0l5-5a1 1 0 00-1.414-1.414L12 13.586 7.707 9.293a1 1 0 00-1.414 1.414z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgChevronDown24.propTypes = {
    color: propTypes.string,
}
export default SvgChevronDown24

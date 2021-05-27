import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgLocation16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M8 1a6 6 0 016 6c0 4-6 9-6 9l-.397-.346C6.265 14.456 2 10.373 2 7a6 6 0 016-6zm0 1a5 5 0 00-5 5c0 .5.126 1.066.373 1.684.453 1.132 1.285 2.38 2.386 3.665.505.59 1.041 1.157 1.583 1.688l.495.475.162.151.252-.234a27.546 27.546 0 001.99-2.08c1.101-1.285 1.933-2.533 2.386-3.665C12.874 8.066 13 7.501 13 7a5 5 0 00-5-5zm0 2.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgLocation16.propTypes = {
    color: propTypes.string,
}
export default SvgLocation16

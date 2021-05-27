import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgView16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M8 3c4 0 7 4 7 5s-3 5-7 5-7-4-7-5 3-5 7-5zm0 1c-1.52 0-3.033.7-4.331 1.868a8.15 8.15 0 00-1.306 1.484A4.336 4.336 0 002 8l.042.091c.055.114.164.321.321.557a8.15 8.15 0 001.306 1.484C4.967 11.3 6.479 12 8 12s3.033-.7 4.331-1.868a8.15 8.15 0 001.306-1.484C13.873 8.294 14 8.004 14 8l-.042-.091a4.902 4.902 0 00-.321-.557 8.15 8.15 0 00-1.306-1.484C11.033 4.7 9.521 4 8 4zm0 1a3 3 0 110 6 3 3 0 010-6zm0 1a2 2 0 100 4 2 2 0 000-4z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgView16.propTypes = {
    color: propTypes.string,
}
export default SvgView16

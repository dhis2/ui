import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgFlag16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M3 1v1h11l-3.5 4.5L14 11H3v4H2V1zm8.955 2H3v7h8.955L9.233 6.5z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgFlag16.propTypes = {
    color: propTypes.string,
}
export default SvgFlag16

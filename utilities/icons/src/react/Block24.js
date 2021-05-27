import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgBlock24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zM4 12a8 8 0 0012.905 6.32L5.679 7.096A7.965 7.965 0 004 12zm8-8c-1.848 0-3.55.627-4.905 1.68l11.226 11.225A8 8 0 0012 4z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgBlock24.propTypes = {
    color: propTypes.string,
}
export default SvgBlock24

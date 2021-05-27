import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgFile24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M14 2l6 6v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zM6 4v16h12V10h-4a2 2 0 01-1.995-1.85L12 8V4zm11.171 4L14 4.829V8z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgFile24.propTypes = {
    color: propTypes.string,
}
export default SvgFile24

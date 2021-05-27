import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgMove16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M8 .793l2.854 2.853-.708.708L8.5 2.707V7.5h4.793l-1.647-1.646.708-.708L15.207 8l-2.853 2.854-.708-.708L13.293 8.5H8.5v4.793l1.646-1.647.708.708L8 15.207l-2.854-2.853.708-.708L7.5 13.293V8.5H2.707l1.647 1.646-.708.708L.793 8l2.853-2.854.708.708L2.707 7.5H7.5V2.707L5.854 4.354l-.708-.708z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgMove16.propTypes = {
    color: propTypes.string,
}
export default SvgMove16

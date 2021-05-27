import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgWorld16({ color }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            color={color}
        >
            <path
                fill="currentColor"
                d="M8 1a7 7 0 110 14A7 7 0 018 1zm0 1c-.933 0-1.816.213-2.604.593L6 3.5 7.5 3 8 4l-1.5.5.5 2L6 7l-.5-1.5L4 7l1.5 1.5h2l.5 2-1.836 3.214A5.996 5.996 0 008 14c1.494 0 2.86-.546 3.91-1.45l-.41-2.05-2-1 1-2.5h3.417a5.963 5.963 0 00-.832-2.187L11.5 6l-2-.5.454-3.175A5.992 5.992 0 008 2zM2 8a5.997 5.997 0 002.896 5.136L4 10l-.5-1.5-1.47-1.103c-.02.198-.03.4-.03.603z"
            />
        </svg>
    )
}

SvgWorld16.propTypes = {
    color: propTypes.string,
}
export default SvgWorld16

import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgImage24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zM8 12.415l-3 2.999V19h14v-1.585l-3-3-3 3zM19 5H5v7.584l3-2.998 5 4.999 3-3 3 3zm-5 2a2 2 0 110 4 2 2 0 010-4z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgImage24.propTypes = {
    color: propTypes.string,
}
export default SvgImage24

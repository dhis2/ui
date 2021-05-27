import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgEmptyFrame24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M19 19v-2h2v2a2 2 0 01-2 2h-2v-2zm-5 0v2h-4v-2zm-7 2H5a2 2 0 01-2-2v-2h2v2h2zM3 10h2v4H3zm16 0h2v4h-2zm0-5h-2V3h2a2 2 0 012 2v2h-2zm-9 0V3h4v2zM5 5v2H3V5a2 2 0 012-2h2v2z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgEmptyFrame24.propTypes = {
    color: propTypes.string,
}
export default SvgEmptyFrame24

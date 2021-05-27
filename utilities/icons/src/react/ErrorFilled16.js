import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgErrorFilled16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M8 1a7 7 0 110 14A7 7 0 018 1zm0 9a1 1 0 100 2 1 1 0 000-2zm1-6H7v5h2z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    )
}

SvgErrorFilled16.propTypes = {
    color: propTypes.string,
}
export default SvgErrorFilled16

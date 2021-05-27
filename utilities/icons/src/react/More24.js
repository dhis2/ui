import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgMore24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M5 10a2 2 0 110 4 2 2 0 010-4zm7 0a2 2 0 110 4 2 2 0 010-4zm7 0a2 2 0 110 4 2 2 0 010-4z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    )
}

SvgMore24.propTypes = {
    color: propTypes.string,
}
export default SvgMore24

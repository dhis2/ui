import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgShare24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M17 2a4 4 0 11-2.806 6.85l-3.357 2.015a4.001 4.001 0 010 2.27l3.357 2.015a4 4 0 11-1.03 1.715L9.805 14.85a4 4 0 110-5.7l3.357-2.015A4 4 0 0117 2zm0 14a2 2 0 100 4 2 2 0 000-4zM7 10a2 2 0 100 4 2 2 0 000-4zm10-6a2 2 0 100 4 2 2 0 000-4z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgShare24.propTypes = {
    color: propTypes.string,
}
export default SvgShare24

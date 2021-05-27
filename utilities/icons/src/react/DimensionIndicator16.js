import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgDimensionIndicator16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M14 1v1H7.5l-3 13h-2L1 8h1l1.29 6h.42L6.5 1zm-1 9v4H9v-4zm-1 1h-2v2h2zm2-3v1H8V8zm-1-5v4H9V3zm-1 1h-2v2h2z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgDimensionIndicator16.propTypes = {
    color: propTypes.string,
}
export default SvgDimensionIndicator16

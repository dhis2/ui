import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgVisualizationGauge24({ color }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            color={color}
        >
            <path
                fill="currentColor"
                d="M12 5c6.525 0 11.834 5.209 11.996 11.695L24 17h-2c0-5.523-4.477-10-10-10-5.43 0-9.848 4.327-9.996 9.72L2 17H0C0 10.373 5.373 5 12 5zm0 3a8.97 8.97 0 014.053.963l.309.163-1.941 3.498a5 5 0 00-7.416 4.16L7 17H3a9 9 0 019-9z"
            />
        </svg>
    )
}

SvgVisualizationGauge24.propTypes = {
    color: propTypes.string,
}
export default SvgVisualizationGauge24

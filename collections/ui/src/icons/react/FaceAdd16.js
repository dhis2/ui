import PropTypes from 'prop-types'
import * as React from 'react'
function SvgFaceAdd16({ color, dataTest, ariaLabel }) {
    return (
        <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color={color}
            data-test={dataTest}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13 0h1v2h2v1h-2v2h-1V3h-2V2h2V0zM6 8a1 1 0 100-2 1 1 0 000 2zm5.032 1.25A3.499 3.499 0 018 11a3.498 3.498 0 01-3.032-1.75l-.866.5A4.498 4.498 0 008 12c1.666 0 3.12-.906 3.898-2.25l-.866-.5zM11 7a1 1 0 11-2 0 1 1 0 012 0zM8 1c.695 0 1.366.101 2 .29V2.34A6 6 0 1013.659 6h1.051A7 7 0 118 1z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgFaceAdd16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgFaceAdd16

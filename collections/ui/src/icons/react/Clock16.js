import PropTypes from 'prop-types'
import * as React from 'react'
function SvgClock16({ color, dataTest, ariaLabel }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
            data-test={dataTest}
        >
            <path
                d="M8 1a7 7 0 110 14A7 7 0 018 1zm0 1a6 6 0 100 12A6 6 0 008 2zm.5 1.5v4.293l2.854 2.853-.708.708L7.5 8.207V3.5z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgClock16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgClock16

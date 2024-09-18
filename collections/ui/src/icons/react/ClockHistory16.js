import PropTypes from 'prop-types'
import * as React from 'react'
function SvgClockHistory16({ color, dataTest, ariaLabel }) {
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
                d="M8 1a7 7 0 01.24 13.996L8 15v-1a6 6 0 10-5.996-6.225L2 8H1a7 7 0 017-7zM4.146 8.146l.708.708L2.707 11H7v1H2.707l2.147 2.146-.708.708L.793 11.5zM8.5 3.5v4.293l2.854 2.853-.708.708L7.5 8.207V3.5z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgClockHistory16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgClockHistory16

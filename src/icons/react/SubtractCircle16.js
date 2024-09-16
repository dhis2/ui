import PropTypes from 'prop-types'
import * as React from 'react'
function SvgSubtractCircle16({ color, dataTest, ariaLabel }) {
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
                d="M8 1a7 7 0 110 14A7 7 0 018 1zm0 1a6 6 0 100 12A6 6 0 008 2zm3 5a1 1 0 010 2H5a1 1 0 110-2z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgSubtractCircle16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgSubtractCircle16

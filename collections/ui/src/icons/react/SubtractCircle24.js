import PropTypes from 'prop-types'
import * as React from 'react'
function SvgSubtractCircle24({ color, dataTest, ariaLabel }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
            data-test={dataTest}
        >
            <path
                d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm4 7a1 1 0 010 2H8a1 1 0 010-2z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgSubtractCircle24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgSubtractCircle24

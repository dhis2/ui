import PropTypes from 'prop-types'
import * as React from 'react'
function SvgCheckmarkCircle24({ color, dataTest, ariaLabel }) {
    return (
        <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color={color}
            data-test={dataTest}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 12a8 8 0 11-16 0 8 8 0 0116 0zm2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-5.293-1.293a1 1 0 00-1.414-1.414L11 13.586l-1.793-1.793a1 1 0 00-1.414 1.414l2.5 2.5a1 1 0 001.414 0l5-5z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgCheckmarkCircle24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgCheckmarkCircle24

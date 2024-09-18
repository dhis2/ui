import PropTypes from 'prop-types'
import * as React from 'react'
function SvgCheckmarkCircle16({ color, dataTest, ariaLabel }) {
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
                d="M14 8A6 6 0 112 8a6 6 0 0112 0zm1 0A7 7 0 111 8a7 7 0 0114 0zm-3.646-1.646a.5.5 0 00-.708-.708L7 9.293 5.354 7.646a.5.5 0 10-.708.708l2 2a.5.5 0 00.708 0l4-4z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgCheckmarkCircle16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgCheckmarkCircle16

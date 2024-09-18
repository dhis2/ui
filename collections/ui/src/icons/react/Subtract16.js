import PropTypes from 'prop-types'
import * as React from 'react'
function SvgSubtract16({ color, dataTest, ariaLabel }) {
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
                d="M2 8a1 1 0 011-1h10a1 1 0 110 2H3a1 1 0 01-1-1z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgSubtract16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgSubtract16

import PropTypes from 'prop-types'
import * as React from 'react'
function SvgFilter16({ color, dataTest, ariaLabel }) {
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
                d="M10 10l-1 1H7l-1-1zm3-3l-1 1H4L3 7zm2-3l-1 1H2L1 4z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    )
}
SvgFilter16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgFilter16

import PropTypes from 'prop-types'
import * as React from 'react'
function SvgAdd16({ color, dataTest, ariaLabel }) {
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
                d="M8 2a1 1 0 011 1v4h4a1 1 0 010 2H9v4a1 1 0 01-2 0V9H3a1 1 0 110-2h4V3a1 1 0 011-1z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    )
}
SvgAdd16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgAdd16

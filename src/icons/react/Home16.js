import PropTypes from 'prop-types'
import * as React from 'react'
function SvgHome16({ color, dataTest, ariaLabel }) {
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
                d="M2 14V6.9l-.71.507-.58-.814L8 1.386l7.29 5.207-.58.814L14 6.9V14zM8 2.614L3 6.186V13h3V9a1 1 0 011-1h2a1 1 0 011 1v4h3V6.186zM9 9H7v4h2z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgHome16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgHome16

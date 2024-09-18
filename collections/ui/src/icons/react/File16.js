import PropTypes from 'prop-types'
import * as React from 'react'
function SvgFile16({ color, dataTest, ariaLabel }) {
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
                d="M9 1l4 4v9a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1zM8 6V2H4v12h8V6zm1-3.585V5h2.586z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgFile16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgFile16

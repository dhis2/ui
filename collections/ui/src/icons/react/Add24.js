import PropTypes from 'prop-types'
import * as React from 'react'
function SvgAdd24({ color, dataTest, ariaLabel }) {
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
                d="M12 3a1 1 0 011 1v7h7a1 1 0 010 2h-7v7a1 1 0 01-2 0v-7H4a1 1 0 010-2h7V4a1 1 0 011-1z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    )
}
SvgAdd24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgAdd24

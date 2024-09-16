import PropTypes from 'prop-types'
import * as React from 'react'
function SvgSubtract24({ color, dataTest, ariaLabel }) {
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
                d="M3 12a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgSubtract24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgSubtract24

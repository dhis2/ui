import PropTypes from 'prop-types'
import * as React from 'react'
function SvgInfoFilled24({ color, dataTest, ariaLabel }) {
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
                d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm1 9h-2v6h2zm-1-4a1 1 0 100 2 1 1 0 000-2z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgInfoFilled24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgInfoFilled24

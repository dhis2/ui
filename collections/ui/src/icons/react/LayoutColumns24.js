import PropTypes from 'prop-types'
import * as React from 'react'
function SvgLayoutColumns24({ color, dataTest, ariaLabel }) {
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
                d="M18 3a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2zM8.5 5H6v14h2.5zm2 0v14h3V5zm5 14H18V5h-2.5z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgLayoutColumns24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgLayoutColumns24

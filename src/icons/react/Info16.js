import PropTypes from 'prop-types'
import * as React from 'react'
function SvgInfo16({ color, dataTest, ariaLabel }) {
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
                d="M8 1a7 7 0 110 14A7 7 0 018 1zm0 1a6 6 0 100 12A6 6 0 008 2zm.5 5v4H10v1H6v-1h1.5V7zM8 4a.75.75 0 110 1.5A.75.75 0 018 4z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgInfo16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgInfo16

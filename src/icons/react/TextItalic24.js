import PropTypes from 'prop-types'
import * as React from 'react'
function SvgTextItalic24({ color, dataTest, ariaLabel }) {
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
                d="M13.5 7H10V5h9v2h-3.5l-5 10H14v2H5v-2h3.5z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgTextItalic24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgTextItalic24

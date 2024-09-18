import PropTypes from 'prop-types'
import * as React from 'react'
function SvgTextBold16({ color, dataTest, ariaLabel }) {
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
                d="M5 3h3.5a2.5 2.5 0 011.872 4.157A2.5 2.5 0 019.5 12H5zm4.5 5H6v3h3.5a1.5 1.5 0 00.144-2.993zm-1-4H6v3h2.5a1.5 1.5 0 00.144-2.993z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgTextBold16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgTextBold16

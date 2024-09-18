import PropTypes from 'prop-types'
import * as React from 'react'
function SvgVisualizationArea24({ color, dataTest, ariaLabel }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            color={color}
            data-test={dataTest}
        >
            <path
                fill="currentColor"
                d="M4 2v18h18v2H2V2h2zm2 2l5 7 5-4 6 7v4H6V4z"
            />
        </svg>
    )
}
SvgVisualizationArea24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgVisualizationArea24

import PropTypes from 'prop-types'
import * as React from 'react'
function SvgVisualizationColumnStacked24({ color, dataTest, ariaLabel }) {
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
                d="M4 2v18h18v2H2V2h2zm5 12v4H6v-4h3zm5-5v9h-3V9h3zm5 6v3h-3v-3h3zm0-10v9h-3V5h3zM9 10v3H6v-3h3zm5-6v4h-3V4h3z"
            />
        </svg>
    )
}
SvgVisualizationColumnStacked24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgVisualizationColumnStacked24

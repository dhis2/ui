import PropTypes from 'prop-types'
import * as React from 'react'
function SvgVisualizationScatter24({ color, dataTest, ariaLabel }) {
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
                d="M4 2v18h18v2H2V2h2zm8.5 13a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm6-2a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-11-3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm6-4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-6-3a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
            />
        </svg>
    )
}
SvgVisualizationScatter24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgVisualizationScatter24

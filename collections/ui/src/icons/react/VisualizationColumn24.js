import PropTypes from 'prop-types'
import * as React from 'react'
function SvgVisualizationColumn24({ color, dataTest, ariaLabel }) {
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
                d="M4 2v18h18v2H2V2h2zm5 5v11H6V7h3zm5-4v15h-3V3h3zm5 8v7h-3v-7h3z"
            />
        </svg>
    )
}
SvgVisualizationColumn24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgVisualizationColumn24

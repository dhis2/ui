import PropTypes from 'prop-types'
import * as React from 'react'
function SvgVisualizationPivotTable24({ color, dataTest, ariaLabel }) {
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 6h5V4H8v2zm5-4h9v20H2V6h4V2h7zm0 18v-5H8v5h5zm0-7V8H8v5h5zm2 7h5v-5h-5v5zm0-7h5V8h-5v5zm0-7h5V4h-5v2zM4 20v-5h2v5H4zM4 8h2v5H4V8z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgVisualizationPivotTable24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgVisualizationPivotTable24

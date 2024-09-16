import PropTypes from 'prop-types'
import * as React from 'react'
function SvgVisualizationGauge16({ color, dataTest, ariaLabel }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
            data-test={dataTest}
        >
            <g fill="currentColor">
                <path d="M8 4a8 8 0 018 8h-1a7 7 0 00-14 0H0l.004-.25A8 8 0 018 4z" />
                <path d="M8 6v3a3 3 0 00-3 3H2a6 6 0 016-6z" />
            </g>
        </svg>
    )
}
SvgVisualizationGauge16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgVisualizationGauge16

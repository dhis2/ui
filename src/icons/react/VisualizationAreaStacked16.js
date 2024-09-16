import PropTypes from 'prop-types'
import * as React from 'react'
function SvgVisualizationAreaStacked16({ color, dataTest, ariaLabel }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
            data-test={dataTest}
        >
            <g fill="currentColor" fillRule="evenodd">
                <path d="M0 0h1v15h15v1H0z" />
                <path d="M15 9v5H2v-3l4-2 4 3zm-5-6l5 2v2l-5 3-4-3-4 2V3l4 2z" />
            </g>
        </svg>
    )
}
SvgVisualizationAreaStacked16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgVisualizationAreaStacked16

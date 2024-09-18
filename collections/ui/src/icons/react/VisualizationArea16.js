import PropTypes from 'prop-types'
import * as React from 'react'
function SvgVisualizationArea16({ color, dataTest, ariaLabel }) {
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
                d="M1 0v15h15v1H0V0zm1 3l4 5 4-2 5 5v3H2z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    )
}
SvgVisualizationArea16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgVisualizationArea16

import PropTypes from 'prop-types'
import * as React from 'react'
function SvgVisualizationScatter16({ color, dataTest, ariaLabel }) {
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
                d="M1 0v15h15v1H0V0zm5 11a1 1 0 110 2 1 1 0 010-2zm7-2a1 1 0 110 2 1 1 0 010-2zM3 8a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm4-4a1 1 0 110 2 1 1 0 010-2zM6 4a1 1 0 110 2 1 1 0 010-2zm7-2a1 1 0 110 2 1 1 0 010-2z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    )
}
SvgVisualizationScatter16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgVisualizationScatter16

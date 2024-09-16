import PropTypes from 'prop-types'
import * as React from 'react'
function SvgVisualizationBar16({ color, dataTest, ariaLabel }) {
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
                d="M1 5h10v3H1v2h13v3H1v2h15v1H0V0h6v3H1z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    )
}
SvgVisualizationBar16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgVisualizationBar16

import PropTypes from 'prop-types'
import * as React from 'react'
function SvgVisualizationBar24({ color, dataTest, ariaLabel }) {
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
                d="M4 2v18h18v2H2V2h2zm16 13v3H6v-3h14zm-4-5v3H6v-3h10zm-4-5v3H6V5h6z"
            />
        </svg>
    )
}
SvgVisualizationBar24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgVisualizationBar24

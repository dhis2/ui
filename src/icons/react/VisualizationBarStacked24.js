import PropTypes from 'prop-types'
import * as React from 'react'
function SvgVisualizationBarStacked24({ color, dataTest, ariaLabel }) {
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
                d="M4 2v18h18v2H2V2h2zm16 13v3h-9v-3h9zm-10 0v3H6v-3h4zm7-5v3h-3v-3h3zm-4 0v3H6v-3h7zm5-5v3h-7V5h7zm-8 0v3H6V5h4z"
            />
        </svg>
    )
}
SvgVisualizationBarStacked24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgVisualizationBarStacked24

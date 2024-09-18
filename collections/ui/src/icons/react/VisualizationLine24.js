import PropTypes from 'prop-types'
import * as React from 'react'
function SvgVisualizationLine24({ color, dataTest, ariaLabel }) {
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
                d="M4 2v18h18v2H2V2h2zm2.92 3.606l2.498 5.831 3.757-2.819 4 5.001L20.4 11.2l1.2 1.6-4.775 3.582-4-5.001-4.243 3.182-3.501-8.17 1.838-.787z"
            />
        </svg>
    )
}
SvgVisualizationLine24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgVisualizationLine24

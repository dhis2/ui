import PropTypes from 'prop-types'
import * as React from 'react'
function SvgVisualizationOutlierTable24({ color, dataTest, ariaLabel }) {
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
                d="M2 2h20v13h-2V8h-7v2h-2V8H4v5h6v2H4v5h2v2H2V2zm11 4h7V4h-7v2zm-2-2v2H4V4h7zm5 14v2h-2v-2h2zm-1-9l7 12H8l7-12zm1 4h-2v4h2v-4z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgVisualizationOutlierTable24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgVisualizationOutlierTable24

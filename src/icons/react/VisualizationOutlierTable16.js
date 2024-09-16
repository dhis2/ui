import PropTypes from 'prop-types'
import * as React from 'react'
function SvgVisualizationOutlierTable16({ color, dataTest, ariaLabel }) {
    return (
        <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color={color}
            data-test={dataTest}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 2h3v2H2V2zm4 2V2h3v2H6zm4 0V2h4v2h-4zm4 4V5h-4v2H9V5H6v4h1v1H6v1H5v-1H2v4h4v1H1V1h14v7h-1zM5 9H2V5h3v4zm7 3v1h-1v-1h1zm4 2l-4.5-8L7 14h9zm-4-5h-1v2h1V9z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgVisualizationOutlierTable16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgVisualizationOutlierTable16

import PropTypes from 'prop-types'
import * as React from 'react'
function SvgVisualizationPivotTable16({ color, dataTest, ariaLabel }) {
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
                d="M9 4V2H5v2h4zM5 5v4h4V5H5zm0 5v4h4v-4H5zm0 5h10V1H4v3H1v11h4zm-1-1v-4H2v4h2zM2 9h2V5H2v4zm8 5v-4h4v4h-4zm0-5h4V5h-4v4zm4-7v2h-4V2h4z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgVisualizationPivotTable16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgVisualizationPivotTable16

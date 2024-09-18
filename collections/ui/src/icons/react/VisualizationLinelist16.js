import PropTypes from 'prop-types'
import * as React from 'react'
function SvgVisualizationLinelist16({ color, dataTest, ariaLabel }) {
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
                d="M5 2v2H2V2h3zM2 5h3v4H2V5zm0 5v4h3v-4H2zm4 0v4h3v-4H6zm4 0v4h3v-4h-3zm3-1h-3V5h3v4zm1 0V1H1v14h13V9zM9 9H6V5h3v4zm4-7v2h-3V2h3zM6 4h3V2H6v2z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgVisualizationLinelist16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgVisualizationLinelist16

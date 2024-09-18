import PropTypes from 'prop-types'
import * as React from 'react'
function SvgVisualizationLinelist24({ color, dataTest, ariaLabel }) {
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
                d="M13 4h7v2h-7V4zm-2 2V4H4v2h7zM4 8h7v5H4V8zm9 5V8h7v5h-7zM2 6V2h20v20H2V6zm2 9v5h7v-5H4zm9 0v5h7v-5h-7z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgVisualizationLinelist24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgVisualizationLinelist24

import PropTypes from 'prop-types'
import * as React from 'react'
function SvgVisualizationColumn16({ color, dataTest, ariaLabel }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
            data-test={dataTest}
        >
            <g fill="currentColor" fillRule="evenodd">
                <path d="M0 0h1v15h15v1H0z" />
                <path d="M16 8v7h-3V8zm-5-6v13H8V2zM6 4v11H3V4z" />
            </g>
        </svg>
    )
}
SvgVisualizationColumn16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgVisualizationColumn16

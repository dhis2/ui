import PropTypes from 'prop-types'
import * as React from 'react'
function SvgVisualizationLine16({ color, dataTest, ariaLabel }) {
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
                <path
                    d="M2.643 3.614l2.595 4.325 2.936-1.957 3 3.999 2.41-1.605.832 1.248-3.59 2.394-3-4-3.064 2.042-3.405-5.674z"
                    fillRule="nonzero"
                />
            </g>
        </svg>
    )
}
SvgVisualizationLine16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgVisualizationLine16

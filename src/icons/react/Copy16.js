import PropTypes from 'prop-types'
import * as React from 'react'
function SvgCopy16({ color, dataTest, ariaLabel }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
            data-test={dataTest}
        >
            <g fill="currentColor">
                <path d="M14 3a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm0 1H4v10h10z" />
                <path d="M11 1v1H2v9H1V2a1 1 0 011-1z" />
            </g>
        </svg>
    )
}
SvgCopy16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgCopy16

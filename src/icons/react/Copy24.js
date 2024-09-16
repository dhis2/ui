import PropTypes from 'prop-types'
import * as React from 'react'
function SvgCopy24({ color, dataTest, ariaLabel }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
            data-test={dataTest}
        >
            <g fill="currentColor">
                <path d="M20 6a2 2 0 012 2v12a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2zm0 2H8v12h12z" />
                <path d="M14 2v2H4v10H2V4a2 2 0 012-2z" />
            </g>
        </svg>
    )
}
SvgCopy24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgCopy24

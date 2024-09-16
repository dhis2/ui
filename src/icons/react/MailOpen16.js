import PropTypes from 'prop-types'
import * as React from 'react'
function SvgMailOpen16({ color, dataTest, ariaLabel }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
            data-test={dataTest}
        >
            <path
                d="M8.496 1.284l6 3.428A1 1 0 0115 5.58V14a1 1 0 01-1 1H2a1 1 0 01-1-1V5.58a1 1 0 01.504-.868l6-3.428a1 1 0 01.992 0zM14 6.577l-5.031 4.258a1.5 1.5 0 01-1.823.088l-.115-.088L2 6.577V14h12zM8 2.152L2.22 5.454l5.457 4.618a.5.5 0 00.572.051l.074-.051 5.457-4.618z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgMailOpen16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgMailOpen16

import PropTypes from 'prop-types'
import * as React from 'react'
function SvgWindow16({ color, dataTest, ariaLabel }) {
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
                d="M15 13a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1h12a1 1 0 011 1zm-1-7H2v7h12zm0-3H2v2h12z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgWindow16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgWindow16

import PropTypes from 'prop-types'
import * as React from 'react'
function SvgLayoutRows24({ color, dataTest, ariaLabel }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
            data-test={dataTest}
        >
            <path
                d="M18 3a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2zM6 17v2h12v-2zm12-8H6v2h12zm0-4H6v2h12zM6 15h12v-2H6z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgLayoutRows24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgLayoutRows24

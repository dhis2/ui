import PropTypes from 'prop-types'
import * as React from 'react'
function SvgApps16({ color, dataTest, ariaLabel }) {
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
                d="M4 12v2H2v-2zm5 0v2H7v-2zm5 0v2h-2v-2zM4 7v2H2V7zm5 0v2H7V7zm5 0v2h-2V7zM4 2v2H2V2zm5 0v2H7V2zm5 0v2h-2V2z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    )
}
SvgApps16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgApps16

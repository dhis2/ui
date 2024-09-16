import PropTypes from 'prop-types'
import * as React from 'react'
function SvgMail24({ color, dataTest, ariaLabel }) {
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
                d="M19 5a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2zm0 3.414L13.414 14a2 2 0 01-2.701.117L10.586 14 5 8.415V17h14zM17.584 7H6.415L12 12.586z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgMail24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgMail24

import PropTypes from 'prop-types'
import * as React from 'react'
function SvgTextHeading24({ color, dataTest, ariaLabel }) {
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
                d="M5 6H3v8h2v-3h2v3h2V6H7v3H5V6zM4 16a1 1 0 100 2h16a1 1 0 100-2H4z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgTextHeading24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgTextHeading24

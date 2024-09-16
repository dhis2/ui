import PropTypes from 'prop-types'
import * as React from 'react'
function SvgTextHeading16({ color, dataTest, ariaLabel }) {
    return (
        <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color={color}
            data-test={dataTest}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 4H1v6h1V7h2v3h1V4H4v2H2V4zm13 7H1v1h14v-1z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgTextHeading16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgTextHeading16

import PropTypes from 'prop-types'
import * as React from 'react'
function SvgTextListOrdered16({ color, dataTest, ariaLabel }) {
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
                d="M3 2v4h1v1H1V6h1V3.5H1v-1h1V2h1zm12 9v1H6v-1h9zm0-7v1H6V4h9zM4 14H1v-2a1 1 0 011-1h1v-1H1V9h2a1 1 0 011 1v1a1 1 0 01-1 1H2v1h2v1z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgTextListOrdered16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgTextListOrdered16

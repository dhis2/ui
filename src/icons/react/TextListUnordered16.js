import PropTypes from 'prop-types'
import * as React from 'react'
function SvgTextListUnordered16({ color, dataTest, ariaLabel }) {
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
                d="M4 4.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6 11h9v1H6v-1zm9-6H6V4h9v1zM2.5 13a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgTextListUnordered16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgTextListUnordered16

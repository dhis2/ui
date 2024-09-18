import PropTypes from 'prop-types'
import * as React from 'react'
function SvgTextListUnordered24({ color, dataTest, ariaLabel }) {
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
                d="M6 7a2 2 0 11-4 0 2 2 0 014 0zm15 9a1 1 0 110 2H11a1 1 0 110-2h10zm0-10a1 1 0 110 2H11a1 1 0 110-2h10zM4 19a2 2 0 100-4 2 2 0 000 4z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgTextListUnordered24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgTextListUnordered24

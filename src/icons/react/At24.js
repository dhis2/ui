import PropTypes from 'prop-types'
import * as React from 'react'
function SvgAt24({ color, dataTest, ariaLabel }) {
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
                d="M5 12a7 7 0 017-7h1a6 6 0 016 6v2a2 2 0 11-4 0V7h-2v1.337A3.5 3.5 0 008 11.5v1a3.5 3.5 0 005.683 2.736A4 4 0 0021 13v-2a8 8 0 00-8-8h-1a9 9 0 000 18h5a1 1 0 100-2h-5a7 7 0 01-7-7zm8 .5v-1a1.5 1.5 0 00-3 0v1a1.5 1.5 0 003 0z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgAt24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgAt24

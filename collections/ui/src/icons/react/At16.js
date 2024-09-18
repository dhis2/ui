import PropTypes from 'prop-types'
import * as React from 'react'
function SvgAt16({ color, dataTest, ariaLabel }) {
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
                d="M2 7.5A5.5 5.5 0 017.5 2h1A5.5 5.5 0 0114 7.5v2a1.5 1.5 0 01-3 0v-5h-1v1.264a3 3 0 10.087 4.391A2.5 2.5 0 0015 9.5v-2A6.5 6.5 0 008.5 1h-1A6.5 6.5 0 001 7.5v1A6.5 6.5 0 007.5 15h4a.5.5 0 000-1h-4A5.5 5.5 0 012 8.5v-1zm8 .5a2 2 0 10-4 0 2 2 0 004 0z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgAt16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgAt16

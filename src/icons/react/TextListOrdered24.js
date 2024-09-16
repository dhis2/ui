import PropTypes from 'prop-types'
import * as React from 'react'
function SvgTextListOrdered24({ color, dataTest, ariaLabel }) {
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
                d="M5.75 4a.75.75 0 00-1.5 0v.25H3a.75.75 0 000 1.5h1.25v3.5H3a.75.75 0 000 1.5h4a.75.75 0 000-1.5H5.75V4zM21 16a1 1 0 110 2H11a1 1 0 110-2h10zm0-10a1 1 0 110 2H11a1 1 0 110-2h10zM2.25 14a.75.75 0 01.75-.75h3c.966 0 1.75.784 1.75 1.75v1A1.75 1.75 0 016 17.75H4a.25.25 0 00-.25.25v1c0 .138.112.25.25.25h3a.75.75 0 010 1.5H4A1.75 1.75 0 012.25 19v-1c0-.966.784-1.75 1.75-1.75h2a.25.25 0 00.25-.25v-1a.25.25 0 00-.25-.25H3a.75.75 0 01-.75-.75z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgTextListOrdered24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgTextListOrdered24

import PropTypes from 'prop-types'
import * as React from 'react'
function SvgUserGroup16({ color, dataTest, ariaLabel }) {
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
                d="M9 10a3 3 0 013 3v1H4v-1a3 3 0 013-3zm0 1H7a2 2 0 00-1.995 1.85L5 13h6a2 2 0 00-1.85-1.995zM4 6v1H3a2 2 0 00-1.995 1.85L1 9h3v1H0V9a3 3 0 013-3zm9 0a3 3 0 013 3v1h-4V9h3a2 2 0 00-1.85-1.995L13 7h-1V6zM8 5a2 2 0 110 4 2 2 0 010-4zm0 1a1 1 0 100 2 1 1 0 000-2zM4 1a2 2 0 110 4 2 2 0 010-4zm8 0a2 2 0 110 4 2 2 0 010-4zM4 2a1 1 0 100 2 1 1 0 000-2zm8 0a1 1 0 100 2 1 1 0 000-2z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgUserGroup16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgUserGroup16

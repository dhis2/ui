import PropTypes from 'prop-types'
import * as React from 'react'
function SvgUser24({ color, dataTest, ariaLabel }) {
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
                d="M14 12a6 6 0 016 6v3H4v-3a6 6 0 016-6zm0 2h-4a4 4 0 00-3.995 3.8L6 18v1h12v-1a4 4 0 00-3.8-3.995zM12 3a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgUser24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgUser24

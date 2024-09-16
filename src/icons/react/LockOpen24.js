import PropTypes from 'prop-types'
import * as React from 'react'
function SvgLockOpen24({ color, dataTest, ariaLabel }) {
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
                d="M8 7a4 4 0 118 0h-2a2 2 0 00-3.995-.15L10 7v2h7a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8a2 2 0 012-2h1zm9 4H7v8h10z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgLockOpen24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgLockOpen24

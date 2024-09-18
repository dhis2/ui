import PropTypes from 'prop-types'
import * as React from 'react'
function SvgDelete24({ color, dataTest, ariaLabel }) {
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
                d="M20 5a1 1 0 010 2h-1v13a2 2 0 01-2 2H7a2 2 0 01-2-2V7H4a1 1 0 110-2zm-3 2H7v13h10zm-6 2v8h-1V9zm3 0v8h-1V9zm1-7v2H9V2z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgDelete24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgDelete24

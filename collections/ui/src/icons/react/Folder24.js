import PropTypes from 'prop-types'
import * as React from 'react'
function SvgFolder24({ color, dataTest, ariaLabel }) {
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
                d="M9.465 3a1 1 0 01.832.445L12 6h8a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2zm1.465 5L8.929 5H4v13h16V8z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgFolder24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgFolder24

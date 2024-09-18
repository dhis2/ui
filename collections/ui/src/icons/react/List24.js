import PropTypes from 'prop-types'
import * as React from 'react'
function SvgList24({ color, dataTest, ariaLabel }) {
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
                d="M4.5 16.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM20 17a1 1 0 010 2H9a1 1 0 010-2zM4.5 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM20 11a1 1 0 010 2H9a1 1 0 010-2zM4.5 4.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM20 5a1 1 0 010 2H9a1 1 0 110-2z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    )
}
SvgList24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgList24

import PropTypes from 'prop-types'
import * as React from 'react'
function SvgQueue24({ color, dataTest, ariaLabel }) {
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
                d="M19 3a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm0 2H5v8h14zM4 16h16a2 2 0 01-2 2H6a2 2 0 01-2-2zm1 3h14a2 2 0 01-2 2H7a2 2 0 01-2-2z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgQueue24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgQueue24

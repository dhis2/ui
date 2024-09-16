import PropTypes from 'prop-types'
import * as React from 'react'
function SvgTable24({ color, dataTest, ariaLabel }) {
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
                d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zM5 15v4h6v-4zm14 0h-6v4h6zm0-6h-6v4h6zm0-4H5v2h14zM5 13h6V9H5z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgTable24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgTable24

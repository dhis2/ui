import PropTypes from 'prop-types'
import * as React from 'react'
function SvgDimensionData16({ color, dataTest, ariaLabel }) {
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
                d="M12 1a1 1 0 011 1v11a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1zm-8 9v3h8v-3zm2 1v1H5v-1zm0-4v1H5V7zm6-5H4v3h8zM6 3v1H5V3zM4 9h8V6H4z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgDimensionData16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgDimensionData16

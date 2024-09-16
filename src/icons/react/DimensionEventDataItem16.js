import PropTypes from 'prop-types'
import * as React from 'react'
function SvgDimensionEventDataItem16({ color, dataTest, ariaLabel }) {
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
                d="M11.5 8a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm0 1a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM13 2v5h-1V4H2v7h5v1H1V2z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    )
}
SvgDimensionEventDataItem16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgDimensionEventDataItem16

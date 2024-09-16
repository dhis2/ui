import PropTypes from 'prop-types'
import * as React from 'react'
function SvgDimensionDataSet16({ color, dataTest, ariaLabel }) {
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
                d="M12 9l2 4v1H9v-1l2-4zM4.5 9a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm7 1.236L10.118 13h2.763zM4.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm7-8a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM7 2v5H2V2zm4.5 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM6 3H3v3h3z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgDimensionDataSet16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgDimensionDataSet16

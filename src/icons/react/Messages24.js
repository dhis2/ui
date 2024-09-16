import PropTypes from 'prop-types'
import * as React from 'react'
function SvgMessages24({ color, dataTest, ariaLabel }) {
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
                d="M20 5a2 2 0 012 2v8a2 2 0 01-2 2h-1v3.826a1 1 0 01-1.65.759L12 17H7a2 2 0 01-2-2V7a2 2 0 012-2zm0 2H7v8h5.74L17 18.652V15h3zm-6-5v2H5a1 1 0 00-.993.883L4 5v7H2V5a3 3 0 012.824-2.995L5 2z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgMessages24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgMessages24

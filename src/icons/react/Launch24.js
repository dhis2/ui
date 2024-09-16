import PropTypes from 'prop-types'
import * as React from 'react'
function SvgLaunch24({ color, dataTest, ariaLabel }) {
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
                d="M11 3v2H5v14h14v-6h2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm11-2a1 1 0 01.993.883L23 2v6a1 1 0 01-1.993.117L21 8V4.414l-7.293 7.293a1 1 0 01-1.497-1.32l.083-.094L19.584 3H16a1 1 0 01-.993-.883L15 2a1 1 0 01.883-.993L16 1z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgLaunch24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgLaunch24

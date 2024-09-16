import PropTypes from 'prop-types'
import * as React from 'react'
function SvgSearch24({ color, dataTest, ariaLabel }) {
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
                d="M10 3a7 7 0 015.6 11.201.056.056 0 01.013.009l.094.083 5 5a1 1 0 01-1.32 1.497l-.094-.083-5-5a1.009 1.009 0 01-.094-.108A7 7 0 1110 3zm0 2a5 5 0 100 10 5 5 0 000-10z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgSearch24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgSearch24

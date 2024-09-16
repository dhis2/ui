import PropTypes from 'prop-types'
import * as React from 'react'
function SvgChevronRight24({ color, dataTest, ariaLabel }) {
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
                d="M9.293 6.293a1 1 0 011.32-.083l.094.083 5 5a1 1 0 01.083 1.32l-.083.094-5 5a1 1 0 01-1.497-1.32l.083-.094L13.585 12 9.293 7.707a1 1 0 01-.083-1.32z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgChevronRight24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgChevronRight24

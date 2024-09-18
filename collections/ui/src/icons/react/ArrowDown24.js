import PropTypes from 'prop-types'
import * as React from 'react'
function SvgArrowDown24({ color, dataTest, ariaLabel }) {
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
                d="M12 4a1 1 0 01.993.883L13 5v11.584l4.293-4.291a1 1 0 011.32-.083l.094.083a1 1 0 01.083 1.32l-.083.094-6 6a1 1 0 01-1.32.083l-.094-.083-6-6a1 1 0 011.32-1.497l.094.083L11 16.586V5a1 1 0 011-1z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgArrowDown24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgArrowDown24

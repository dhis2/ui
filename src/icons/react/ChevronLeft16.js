import PropTypes from 'prop-types'
import * as React from 'react'
function SvgChevronLeft16({ color, dataTest, ariaLabel }) {
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
                d="M9.146 4.146a.5.5 0 01.765.638l-.057.07L6.707 8l3.147 3.146a.5.5 0 01.057.638l-.057.07a.5.5 0 01-.638.057l-.07-.057-3.5-3.5a.5.5 0 01-.057-.638l.057-.07z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgChevronLeft16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgChevronLeft16

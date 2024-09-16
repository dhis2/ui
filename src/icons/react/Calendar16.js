import PropTypes from 'prop-types'
import * as React from 'react'
function SvgCalendar16({ color, dataTest, ariaLabel }) {
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
                d="M11.5 2a.5.5 0 01.5.5V4h1a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1h1V2.5a.5.5 0 011 0V4h6V2.5a.5.5 0 01.5-.5zM13 6H3v7h10zm-8 4a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zM5 7a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgCalendar16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgCalendar16

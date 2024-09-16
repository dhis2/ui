import PropTypes from 'prop-types'
import * as React from 'react'
function SvgChevronUp16({ color, dataTest, ariaLabel }) {
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
                d="M7.646 5.646a.5.5 0 01.638-.057l.07.057 3.5 3.5a.5.5 0 01-.638.765l-.07-.057L8 6.707 4.854 9.854a.5.5 0 01-.638.057l-.07-.057a.5.5 0 01-.057-.638l.057-.07z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgChevronUp16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgChevronUp16

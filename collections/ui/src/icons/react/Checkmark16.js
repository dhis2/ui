import PropTypes from 'prop-types'
import * as React from 'react'
function SvgCheckmark16({ color, dataTest, ariaLabel }) {
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
                d="M13.646 3.646a.5.5 0 01.765.638l-.057.07-8 8a.5.5 0 01-.638.057l-.07-.057-3-3a.5.5 0 01.638-.765l.07.057L6 11.293z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgCheckmark16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgCheckmark16

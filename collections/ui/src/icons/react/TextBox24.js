import PropTypes from 'prop-types'
import * as React from 'react'
function SvgTextBox24({ color, dataTest, ariaLabel }) {
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
                d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm0 2H5v14h14zm-5.757 2.273L16.252 16h-1.977l-.648-1.99h-3.15L9.83 16H7.853l3.013-8.727zM12.09 9.267h-.069l-1.073 3.303h2.215z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgTextBox24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgTextBox24

import PropTypes from 'prop-types'
import * as React from 'react'
function SvgTerminalWindow24({ color, dataTest, ariaLabel }) {
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
                d="M20 4a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 6H4v8h16zm-10.793.793L12.414 14l-3.207 3.207-1.414-1.414L9.585 14l-1.792-1.793zM20 6H4v2h16z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgTerminalWindow24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgTerminalWindow24

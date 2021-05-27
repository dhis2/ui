import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgTerminalWindow16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M14 2a1 1 0 011 1v10a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1zm0 4H2v7h12zM5.854 7.146L8.207 9.5l-2.353 2.354-.708-.708L6.793 9.5 5.146 7.854zM14 3H2v2h12z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgTerminalWindow16.propTypes = {
    color: propTypes.string,
}
export default SvgTerminalWindow16

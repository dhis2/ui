import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgWindow16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M15 13a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1h12a1 1 0 011 1zm-1-7H2v7h12zm0-3H2v2h12z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgWindow16.propTypes = {
    color: propTypes.string,
}
export default SvgWindow16

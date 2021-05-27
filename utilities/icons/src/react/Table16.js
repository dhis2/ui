import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgTable16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M14 1a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1zm-6.5 9H2v4h5.5zm6.5 0H8.5v4H14zM2 5v4h5.5V5zm12-3H2v2h12zM8.5 9H14V5H8.5z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgTable16.propTypes = {
    color: propTypes.string,
}
export default SvgTable16

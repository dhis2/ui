import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgRuler16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M14 5a1 1 0 011 1v4a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1zm-2 3h-1V6H8.5v2h-1V6H5v2H4V6H2v4h12V6h-2z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgRuler16.propTypes = {
    color: propTypes.string,
}
export default SvgRuler16

import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgRuler24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M20 7a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2zM6 9H4v6h16V9h-2v3a1 1 0 01-2 0V9h-3v3a1 1 0 01-2 0V9H8v3a1 1 0 01-2 0z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgRuler24.propTypes = {
    color: propTypes.string,
}
export default SvgRuler24

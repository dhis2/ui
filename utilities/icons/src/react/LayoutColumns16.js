import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgLayoutColumns16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M13 1c.552 0 1 .482 1 1.077v11.846c0 .595-.448 1.077-1 1.077H3c-.552 0-1-.482-1-1.077V2.077C2 1.482 2.448 1 3 1zM5.5 2H3v12h2.5zm1 0v12h3V2zm4 12H13V2h-2.5z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgLayoutColumns16.propTypes = {
    color: propTypes.string,
}
export default SvgLayoutColumns16

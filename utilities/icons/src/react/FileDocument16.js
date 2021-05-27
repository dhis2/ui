import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgFileDocument16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M9 1l4 4v9a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1zM8 2H4v12h8V6H8zm-.5 9a.5.5 0 110 1h-2a.5.5 0 110-1zm1-2a.5.5 0 010 1h-3a.5.5 0 010-1zm2-2a.5.5 0 110 1h-5a.5.5 0 010-1zM9 2.415V5h2.586z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgFileDocument16.propTypes = {
    color: propTypes.string,
}
export default SvgFileDocument16

import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgArchive16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M14 1a1 1 0 011 1v3h-1v9a1 1 0 01-1 1H3a1 1 0 01-1-1V5H1V2a1 1 0 011-1zm-1 4H3v9h10zm-3 3v1H6V8zm4-6H2v2h12z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgArchive16.propTypes = {
    color: propTypes.string,
}
export default SvgArchive16

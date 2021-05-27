import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgUserGroup24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M13 15a4 4 0 014 4v2H7v-2a4 4 0 014-4zm0 2h-2a2 2 0 00-1.995 1.85L9 19h6a2 2 0 00-1.85-1.995zM7 9v2H6a2 2 0 00-1.995 1.85L4 13h3v2H2v-2a4 4 0 014-4zm11 0a4 4 0 014 4v2h-5v-2h3a2 2 0 00-1.85-1.995L18 11h-1V9zm-6-1a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 100 2 1 1 0 000-2zM7 2a3 3 0 110 6 3 3 0 010-6zm10 0a3 3 0 110 6 3 3 0 010-6zM7 4a1 1 0 100 2 1 1 0 000-2zm10 0a1 1 0 100 2 1 1 0 000-2z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgUserGroup24.propTypes = {
    color: propTypes.string,
}
export default SvgUserGroup24

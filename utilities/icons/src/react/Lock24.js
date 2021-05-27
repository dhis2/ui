import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgLock24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M12 3a4 4 0 014 4v2h1a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8a2 2 0 012-2h1V7a4 4 0 014-4zm5 8H7v8h10zm-5 2a2 2 0 110 4 2 2 0 010-4zm0-8a2 2 0 00-1.995 1.85L10 7v2h4V7a2 2 0 00-2-2z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgLock24.propTypes = {
    color: propTypes.string,
}
export default SvgLock24

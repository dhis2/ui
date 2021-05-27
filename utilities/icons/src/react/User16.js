import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgUser16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M9 8a5 5 0 015 5v1H2v-1a5 5 0 015-5zm0 1H7a4 4 0 00-3.995 3.8L3 13h10a4 4 0 00-3.8-3.995zM8 1a3 3 0 110 6 3 3 0 010-6zm0 1a2 2 0 100 4 2 2 0 000-4z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgUser16.propTypes = {
    color: propTypes.string,
}
export default SvgUser16

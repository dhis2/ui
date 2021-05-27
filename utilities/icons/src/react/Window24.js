import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgWindow24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M20 4a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zM4 10v8h16v-8zm0-2h16V6H4z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgWindow24.propTypes = {
    color: propTypes.string,
}
export default SvgWindow24

import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgThumbDown24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M16 3a5 5 0 015 5v6a2 2 0 01-2 2h-3l-.518 2.588A3 3 0 0112.541 21H11l-1-5-2-2H3V3zM5 5v7h1V5zm3 7h.828l3.014 3.014.796 3.98h.02a1 1 0 00.833-.684l.03-.114.84-4.196H19V8a3 3 0 00-2.824-2.995L16 5H8z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgThumbDown24.propTypes = {
    color: propTypes.string,
}
export default SvgThumbDown24

import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgCalendar24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M17 2a1 1 0 011 1v2h1a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h1V3a1 1 0 112 0v2h8V3a1 1 0 011-1zm2 7H5v10h14zm-6 6v2h-2v-2zm-4 0v2H7v-2zm0-4v2H7v-2zm4 0v2h-2v-2zm4 0v2h-2v-2z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgCalendar24.propTypes = {
    color: propTypes.string,
}
export default SvgCalendar24

import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgPushLeft24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M19 2a2 2 0 012 2v16a2 2 0 01-2 2h-9V12h2v8h7V4h-7v2h-2V2zM6.707 4.293a1 1 0 01.083 1.32l-.083.094L4.414 8H16a1 1 0 01.117 1.993L16 10H4.414l2.293 2.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.32.083l-.094-.083-4-4a1 1 0 01-.083-1.32l.083-.094 4-4a1 1 0 011.414 0z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgPushLeft24.propTypes = {
    color: propTypes.string,
}
export default SvgPushLeft24

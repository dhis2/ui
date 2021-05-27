import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgLogOut24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M10 12c1.777 0 3.374.773 4.472 2H8a4 4 0 00-3.995 3.8L4 18v2h12v2H2v-4a6 6 0 016-6zm8.613 1.21l.094.083 3 3a1 1 0 01.083 1.32l-.083.094-3 3a1 1 0 01-1.497-1.32l.083-.094L18.585 18H12a1 1 0 01-.117-1.993L12 16h6.585l-1.292-1.293a1 1 0 01-.083-1.32l.083-.094a1 1 0 011.32-.083zM9 3a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgLogOut24.propTypes = {
    color: propTypes.string,
}
export default SvgLogOut24

import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgPushRight24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M14 2v4h-2V4H5v16h7v-8h2v10H5a2 2 0 01-2-2V4a2 2 0 012-2zm4.613 2.21l.094.083 4 4a1 1 0 01.083 1.32l-.083.094-4 4a1 1 0 01-1.497-1.32l.083-.094L19.585 10H8a1 1 0 01-.117-1.993L8 8h11.585l-2.292-2.293a1 1 0 01-.083-1.32l.083-.094a1 1 0 011.32-.083z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgPushRight24.propTypes = {
    color: propTypes.string,
}
export default SvgPushRight24

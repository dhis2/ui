import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgDuplicate24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M4.097 8.6a10.089 10.089 0 00.16 3.659 6 6 0 007.485 7.485 10.017 10.017 0 003.659.159A8 8 0 014.098 8.6zM14 2a8 8 0 110 16 8 8 0 010-16zm0 2a6 6 0 100 12 6 6 0 000-12zm0 2a1 1 0 01.993.883L15 7v2h2a1 1 0 01.117 1.993L17 11h-2v2a1 1 0 01-1.993.117L13 13v-2h-2a1 1 0 01-.117-1.993L11 9h2V7a1 1 0 011-1z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgDuplicate24.propTypes = {
    color: propTypes.string,
}
export default SvgDuplicate24

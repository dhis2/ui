import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgArchive24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M19 3a2 2 0 012 2v4h-1v10a2 2 0 01-2 2H6a2 2 0 01-2-2V9H3V5a2 2 0 012-2zm-1 6H6v10h12zm-4 3v2h-4v-2zm5-7H5v2h14z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgArchive24.propTypes = {
    color: propTypes.string,
}
export default SvgArchive24

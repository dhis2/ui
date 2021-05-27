import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgUpload16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M13.5 9.5a.5.5 0 01.492.41L14 10v3.5a1.5 1.5 0 01-1.356 1.493L12.5 15h-9a1.5 1.5 0 01-1.493-1.356L2 13.5V10a.5.5 0 01.992-.09L3 10v3.5a.5.5 0 00.41.492L3.5 14h9a.5.5 0 00.492-.41L13 13.5V10a.5.5 0 01.5-.5zM8 1.293l4.354 4.353-.708.708L8.5 3.207V11h-1V3.207L4.354 6.354l-.708-.708z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgUpload16.propTypes = {
    color: propTypes.string,
}
export default SvgUpload16

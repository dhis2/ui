import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgDownload16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M13.5 9.5a.5.5 0 01.492.41L14 10v3.5a1.5 1.5 0 01-1.356 1.493L12.5 15h-9a1.5 1.5 0 01-1.493-1.356L2 13.5V10a.5.5 0 01.992-.09L3 10v3.5a.5.5 0 00.41.492L3.5 14h9a.5.5 0 00.492-.41L13 13.5V10a.5.5 0 01.5-.5zM8.5 2v7.792l3.146-3.146.708.708L8 11.707 3.646 7.354l.708-.708L7.5 9.792V2z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgDownload16.propTypes = {
    color: propTypes.string,
}
export default SvgDownload16

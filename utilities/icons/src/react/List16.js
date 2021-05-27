import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgList16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M2 10.5a1 1 0 110 2 1 1 0 010-2zm13 .5v1H5v-1zM2 6.5a1 1 0 110 2 1 1 0 010-2zM15 7v1H5V7zM2 2.5a1 1 0 110 2 1 1 0 010-2zM15 3v1H5V3z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    )
}

SvgList16.propTypes = {
    color: propTypes.string,
}
export default SvgList16

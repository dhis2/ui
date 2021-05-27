import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgSave16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M11 1l4 4v9a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1zm-.415 1H9v3a1 1 0 01-1 1H2v8h2v-4a1 1 0 011-1h6a1 1 0 011 1v4h2V5.415zM11 10H5v4h6zM8 2H2v3h6z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgSave16.propTypes = {
    color: propTypes.string,
}
export default SvgSave16

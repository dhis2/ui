import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgDimensionValidationRule16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M13.146 3.646l.708.708L10.207 8l3.647 3.646-.708.708L8.793 8zM7 9v1H2V9zm0-3v1H2V6z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    )
}

SvgDimensionValidationRule16.propTypes = {
    color: propTypes.string,
}
export default SvgDimensionValidationRule16

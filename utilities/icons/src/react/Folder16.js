import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgFolder16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M5.586 2a1 1 0 01.707.293L8 4h6a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1zm0 1H2v10h12V5H7.586z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgFolder16.propTypes = {
    color: propTypes.string,
}
export default SvgFolder16

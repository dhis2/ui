import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgAttachment24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M10.5 2a4.5 4.5 0 014.495 4.288L15 6.5V15a3 3 0 01-5.995.176L9 15V8a1 1 0 011.993-.117L11 8v7a1 1 0 001.993.117L13 15V6.5a2.5 2.5 0 00-4.995-.164L8 6.5V16a4 4 0 007.995.2L16 16V8a1 1 0 011.993-.117L18 8v8a6 6 0 01-11.996.225L6 16V6.5A4.5 4.5 0 0110.5 2z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgAttachment24.propTypes = {
    color: propTypes.string,
}
export default SvgAttachment24

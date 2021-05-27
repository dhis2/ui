import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgTextBox16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M14 1a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1zm0 1H2v12h12zM8.859 4.227l2.564 7.273h-1.407l-.603-1.793H6.678l-.6 1.793H4.672l2.56-7.273zM8.074 5.72h-.057l-.984 2.93h2.025z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgTextBox16.propTypes = {
    color: propTypes.string,
}
export default SvgTextBox16

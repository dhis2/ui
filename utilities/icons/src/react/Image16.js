import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgImage16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M13 2a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1zM5 8.707l-2 1.999V13h10v-.293l-3-3-2 2zM13 3H3v6.292l2-2 3 3.001 2-2 3 3zm-2.5 1a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 1a.5.5 0 100 1 .5.5 0 000-1z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgImage16.propTypes = {
    color: propTypes.string,
}
export default SvgImage16

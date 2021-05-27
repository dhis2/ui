import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgList24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M4.5 16.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM20 17a1 1 0 010 2H9a1 1 0 010-2zM4.5 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM20 11a1 1 0 010 2H9a1 1 0 010-2zM4.5 4.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM20 5a1 1 0 010 2H9a1 1 0 110-2z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    )
}

SvgList24.propTypes = {
    color: propTypes.string,
}
export default SvgList24

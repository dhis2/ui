import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgFolder24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M9.465 3a1 1 0 01.832.445L12 6h8a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2zm1.465 5L8.929 5H4v13h16V8z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgFolder24.propTypes = {
    color: propTypes.string,
}
export default SvgFolder24

import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgSave24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M15 3l6 6v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm-.829 2H13v2a2 2 0 01-2 2H5v10h2v-4a2 2 0 012-2h6a2 2 0 012 2v4h2V9.829zM15 15H9v4h6zM11 5H5v2h6z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgSave24.propTypes = {
    color: propTypes.string,
}
export default SvgSave24

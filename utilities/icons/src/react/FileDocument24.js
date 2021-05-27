import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgFileDocument24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M14 2l6 6v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm-2 2H6v16h12V10h-4a2 2 0 01-1.995-1.85L12 8zm1 12a1 1 0 010 2H9a1 1 0 010-2zm2-4a1 1 0 010 2H9a1 1 0 010-2zm-1-7.171V8h3.171z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgFileDocument24.propTypes = {
    color: propTypes.string,
}
export default SvgFileDocument24

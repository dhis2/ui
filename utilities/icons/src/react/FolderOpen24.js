import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgFolderOpen24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M8.465 3a1 1 0 01.832.445L11 6h7a2 2 0 012 2v1.999L22 10a1 1 0 01.949 1.318l-.043.105L20 17.649V18a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2zm11.964 9H6.676l-2.4 6h13.353zm-12.5-7H4v8.306l1.072-2.677a1 1 0 01.807-.622L6 10l12-.001V8H9.93z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgFolderOpen24.propTypes = {
    color: propTypes.string,
}
export default SvgFolderOpen24

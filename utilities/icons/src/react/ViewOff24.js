import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgViewOff24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M4.707 3.293l16 16-1.414 1.414-16-16zm.09 4.332l1.417 1.417C4.888 10.002 4 11.127 4 12c0 1.904 4.221 5 8 5 .638 0 1.288-.088 1.928-.244l1.617 1.617C14.41 18.768 13.205 19 12 19c-5 0-10-4-10-7 0-1.41 1.105-3.042 2.797-4.375zM12 5c5 0 10 4 10 7 0 1.41-1.105 3.042-2.797 4.375l-1.416-1.418C19.113 13.997 20 12.873 20 12c0-1.904-4.221-5-8-5-.638 0-1.288.088-1.928.244L8.455 5.627C9.59 5.232 10.795 5 12 5zm-2.995 6.833l3.162 3.162A3 3 0 019 12zM12 9a3 3 0 013 3l-.006.166-3.16-3.161c.055-.003.11-.005.166-.005z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgViewOff24.propTypes = {
    color: propTypes.string,
}
export default SvgViewOff24

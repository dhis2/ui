import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgFolderOpen16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M5.586 2a1 1 0 01.707.293L8 4h5a1 1 0 011 1l.001 2.032a1.5 1.5 0 011.166 1.733l-.03.13-1.142 4.19-.002.032A1 1 0 0113 14H2a1 1 0 01-1-1V3a1 1 0 011-1zm8.105 6H4.7a.5.5 0 00-.433.249l-.037.08L2.53 13H13c0-.014 0-.028.002-.043l.016-.089 1.155-4.236a.5.5 0 00-.392-.624zM5.586 3H2l-.001 8.539 1.292-3.552a1.5 1.5 0 011.265-.98L4.7 7 13 6.999 13 5H7.586z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgFolderOpen16.propTypes = {
    color: propTypes.string,
}
export default SvgFolderOpen16

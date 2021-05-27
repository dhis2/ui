import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgRedo16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M11.784 4.089l.07.057 3 3a.5.5 0 01.057.638l-.057.07-3 3a.5.5 0 01-.765-.638l.057-.07L13.293 8 4 8a2 2 0 00-.15 3.995L4 12h2.5a.5.5 0 01.09.992L6.5 13H4a3 3 0 01-.176-5.995L4 7l9.293-.001-2.147-2.145a.5.5 0 01-.057-.638l.057-.07a.5.5 0 01.638-.057z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgRedo16.propTypes = {
    color: propTypes.string,
}
export default SvgRedo16

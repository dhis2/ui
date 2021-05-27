import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgPushRight16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M10 1v3H9V2H3v12h6V9h1v6H3a1 1 0 01-1-1V2a1 1 0 011-1zm2.284 2.089l.07.057 3 3a.5.5 0 01.057.638l-.057.07-3 3a.5.5 0 01-.765-.638l.057-.07L13.793 7H5.5a.5.5 0 01-.09-.992L5.5 6h8.293l-2.147-2.146a.5.5 0 01-.057-.638l.057-.07a.5.5 0 01.638-.057z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgPushRight16.propTypes = {
    color: propTypes.string,
}
export default SvgPushRight16

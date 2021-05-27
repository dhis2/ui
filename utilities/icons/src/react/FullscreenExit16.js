import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgFullscreenExit16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M6.5 9a.5.5 0 01.492.41L7 9.5v4a.5.5 0 01-.992.09L6 13.5v-2.794l-3.646 3.648a.5.5 0 01-.765-.638l.057-.07L5.292 10H2.5a.5.5 0 01-.492-.41L2 9.5a.5.5 0 01.41-.492L2.5 9zm7.5-.5V14H8.5v-1H13V8.5zM7.5 2v1H3v4.5H2V2zm6.854-.354a.5.5 0 01.057.638l-.057.07L10.706 6H13.5a.5.5 0 01.492.41L14 6.5a.5.5 0 01-.41.492L13.5 7h-4a.5.5 0 01-.492-.41L9 6.5v-4a.5.5 0 01.992-.09L10 2.5v2.792l3.646-3.646a.5.5 0 01.708 0z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgFullscreenExit16.propTypes = {
    color: propTypes.string,
}
export default SvgFullscreenExit16

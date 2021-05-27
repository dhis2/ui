import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgFullscreen16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M6.854 9.146a.5.5 0 01.057.638l-.057.07L2.706 14H5.5a.5.5 0 01.492.41L6 14.5a.5.5 0 01-.41.492L5.5 15h-4a.5.5 0 01-.492-.41L1 14.5v-4a.5.5 0 01.992-.09L2 10.5v2.792l4.146-4.146a.5.5 0 01.708 0zM13 7v6H7v-1h5V7zM9 3v1H4v5H3V3zm5.5-2a.5.5 0 01.492.41L15 1.5v4a.5.5 0 01-.992.09L14 5.5V2.706L9.854 6.854a.5.5 0 01-.765-.638l.057-.07L13.293 2 10.5 2a.5.5 0 01-.492-.41L10 1.5a.5.5 0 01.41-.492L10.5 1z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgFullscreen16.propTypes = {
    color: propTypes.string,
}
export default SvgFullscreen16

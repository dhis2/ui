import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgLaunch16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M7 2v1H3v10h10V9h1v4a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1zm7.5-1a.5.5 0 01.492.41L15 1.5v5a.5.5 0 01-.992.09L14 6.5V2.706L7.354 9.354a.5.5 0 01-.765-.638l.057-.07L13.292 2H9.5a.5.5 0 01-.492-.41L9 1.5a.5.5 0 01.41-.492L9.5 1z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgLaunch16.propTypes = {
    color: propTypes.string,
}
export default SvgLaunch16

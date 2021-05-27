import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgDashboardWindow24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M20 4a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 6H4v8h16zM9 11a3 3 0 11-3 3h1a2 2 0 102-2zm6 0v6h-1v-6zm2 3v3h-1v-3zm3-8H4v2h16z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgDashboardWindow24.propTypes = {
    color: propTypes.string,
}
export default SvgDashboardWindow24

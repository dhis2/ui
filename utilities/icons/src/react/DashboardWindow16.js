import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgDashboardWindow16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M14 2a1 1 0 011 1v10a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1zm0 4H2v7h12zM5.5 7A2.5 2.5 0 113 9.5h1A1.5 1.5 0 105.5 8zM11 7v5h-1V7zm2 2v3h-1V9zm1-6H2v2h12z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgDashboardWindow16.propTypes = {
    color: propTypes.string,
}
export default SvgDashboardWindow16

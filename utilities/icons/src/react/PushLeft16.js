import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgPushLeft16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M13 1a1 1 0 011 1v12a1 1 0 01-1 1H6V9h1v5h6V2H7v2H6V1zM4.354 3.146a.5.5 0 01.057.638l-.057.07L2.205 6H10.5a.5.5 0 01.09.992L10.5 7H2.207l2.147 2.146a.5.5 0 01.057.638l-.057.07a.5.5 0 01-.638.057l-.07-.057-3-3a.5.5 0 01-.057-.638l.057-.07 3-3a.5.5 0 01.708 0z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgPushLeft16.propTypes = {
    color: propTypes.string,
}
export default SvgPushLeft16

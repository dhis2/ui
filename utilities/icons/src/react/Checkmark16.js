import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgCheckmark16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M13.646 3.646a.5.5 0 01.765.638l-.057.07-8 8a.5.5 0 01-.638.057l-.07-.057-3-3a.5.5 0 01.638-.765l.07.057L6 11.293z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgCheckmark16.propTypes = {
    color: propTypes.string,
}
export default SvgCheckmark16

import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgCheckmark12({ color }) {
    return (
        <svg
            height={12}
            viewBox="0 0 12 12"
            width={12}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M10.146 2.646a.5.5 0 01.765.638l-.057.07-6 6a.5.5 0 01-.638.057l-.07-.057-3-3a.5.5 0 01.638-.765l.07.057L4.5 8.293z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgCheckmark12.propTypes = {
    color: propTypes.string,
}
export default SvgCheckmark12

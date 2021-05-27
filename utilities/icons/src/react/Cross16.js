import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgCross16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M4.284 3.589l.07.057L8 7.293l3.646-3.647a.5.5 0 01.765.638l-.057.07L8.707 8l3.647 3.646a.5.5 0 01-.638.765l-.07-.057L8 8.707l-3.646 3.647a.5.5 0 01-.765-.638l.057-.07L7.293 8 3.646 4.354a.5.5 0 01.638-.765z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgCross16.propTypes = {
    color: propTypes.string,
}
export default SvgCross16

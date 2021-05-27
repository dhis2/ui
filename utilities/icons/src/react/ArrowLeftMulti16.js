import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgArrowLeftMulti16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M10.854 2.646a.5.5 0 01.057.638l-.057.07L6.707 7.5H14.5a.5.5 0 01.09.992l-.09.008H6.707l4.147 4.146a.5.5 0 01.057.638l-.057.07a.5.5 0 01-.638.057l-.07-.057-5-5a.5.5 0 01-.057-.638l.057-.07 5-5a.5.5 0 01.708 0zm-4 0a.5.5 0 01.057.638l-.057.07L2.207 8l4.647 4.646a.5.5 0 01.057.638l-.057.07a.5.5 0 01-.638.057l-.07-.057-5-5a.5.5 0 01-.057-.638l.057-.07 5-5a.5.5 0 01.708 0z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgArrowLeftMulti16.propTypes = {
    color: propTypes.string,
}
export default SvgArrowLeftMulti16

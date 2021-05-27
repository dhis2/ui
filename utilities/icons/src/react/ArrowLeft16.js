import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgArrowLeft16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M7.354 2.646a.5.5 0 01.057.638l-.057.07L3.207 7.5H14a.5.5 0 01.09.992L14 8.5H3.207l4.147 4.146a.5.5 0 01.057.638l-.057.07a.5.5 0 01-.638.057l-.07-.057-5-5a.5.5 0 01-.057-.638l.057-.07 5-5a.5.5 0 01.708 0z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgArrowLeft16.propTypes = {
    color: propTypes.string,
}
export default SvgArrowLeft16

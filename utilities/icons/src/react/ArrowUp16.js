import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgArrowUp16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M8.284 1.589l.07.057 5 5a.5.5 0 01-.638.765l-.07-.057L8.5 3.207V14a.5.5 0 01-.992.09L7.5 14V3.207L3.354 7.354a.5.5 0 01-.638.057l-.07-.057a.5.5 0 01-.057-.638l.057-.07 5-5a.5.5 0 01.638-.057z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgArrowUp16.propTypes = {
    color: propTypes.string,
}
export default SvgArrowUp16

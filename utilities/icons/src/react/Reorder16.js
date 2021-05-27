import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgReorder16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M5 4.5a.5.5 0 01.492.41L5.5 5v7.793l2.146-2.147a.5.5 0 01.638-.057l.07.057a.5.5 0 01.057.638l-.057.07-3 3a.5.5 0 01-.638.057l-.07-.057-3-3a.5.5 0 01.638-.765l.07.057L4.5 12.793V5a.5.5 0 01.5-.5zm6.284-2.911l.07.057 3 3a.5.5 0 01-.638.765l-.07-.057L11.5 3.207V11a.5.5 0 01-.992.09L10.5 11V3.205L8.354 5.354a.5.5 0 01-.638.057l-.07-.057a.5.5 0 01-.057-.638l.057-.07 3-3a.5.5 0 01.638-.057z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgReorder16.propTypes = {
    color: propTypes.string,
}
export default SvgReorder16

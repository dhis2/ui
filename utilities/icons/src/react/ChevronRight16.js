import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgChevronRight16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M6.146 4.146a.5.5 0 01.638-.057l.07.057 3.5 3.5a.5.5 0 01.057.638l-.057.07-3.5 3.5a.5.5 0 01-.765-.638l.057-.07L9.293 8 6.146 4.854a.5.5 0 01-.057-.638z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgChevronRight16.propTypes = {
    color: propTypes.string,
}
export default SvgChevronRight16

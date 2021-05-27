import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgArrowDown16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M8 1.5a.5.5 0 01.492.41L8.5 2v10.792l4.146-4.146a.5.5 0 01.638-.057l.07.057a.5.5 0 01.057.638l-.057.07-5 5-.013.011a.503.503 0 01-.039.033l.052-.044A.502.502 0 018 14.5h-.02a.503.503 0 01-.052-.005L8 14.5a.502.502 0 01-.284-.089l-.018-.013a.503.503 0 01-.04-.033l-.012-.011-5-5a.5.5 0 01.638-.765l.07.057L7.5 12.792V2a.5.5 0 01.5-.5z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgArrowDown16.propTypes = {
    color: propTypes.string,
}
export default SvgArrowDown16

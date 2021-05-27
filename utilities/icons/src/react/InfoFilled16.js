import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgInfoFilled16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M8 1a7 7 0 110 14A7 7 0 018 1zm1 6H7v4H6v1h4v-1H9zM8 3a1 1 0 100 2 1 1 0 000-2z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgInfoFilled16.propTypes = {
    color: propTypes.string,
}
export default SvgInfoFilled16

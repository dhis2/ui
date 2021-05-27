import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgEditItems16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M4 11v1H2v2h2v1H1v-4zm8.5-5.207L15.207 8.5l-6.5 6.5H6v-2.707zm0 1.414L7 12.706V14h1.292l5.501-5.5zM6 6v1H2v2h4v1H1V6zm5-5v4H1V1zm-1 1H2v2h8z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgEditItems16.propTypes = {
    color: propTypes.string,
}
export default SvgEditItems16

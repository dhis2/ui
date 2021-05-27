import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgSubscribe16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M8.5 1v1.025A5 5 0 0113 7v2l1.5 2v2h-4.05a2.5 2.5 0 01-4.9 0H1.5v-2L3 9V7a5 5 0 014.5-4.975V1zm.913 12H6.586l.019.052c.203.513.68.887 1.25.941L8 14a1.5 1.5 0 001.395-.948zM8 3a4 4 0 00-3.995 3.8L4 7v2.333l-1.5 2V12h11v-.667l-1.5-2V7a4 4 0 00-4-4z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgSubscribe16.propTypes = {
    color: propTypes.string,
}
export default SvgSubscribe16

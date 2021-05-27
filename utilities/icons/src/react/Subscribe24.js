import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgSubscribe24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M13 1l.001 2.071A7.002 7.002 0 0119 10v2l2 3v3h-5a4 4 0 11-8 0H3v-3l2-3v-2a7.002 7.002 0 016-6.93V1zm1 17h-4a2 2 0 003.995.15zM12 5a5 5 0 00-4.995 4.783L7 10v2.606l-2 2.999V16h14v-.393l-2-3.001V10a5 5 0 00-5-5z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgSubscribe24.propTypes = {
    color: propTypes.string,
}
export default SvgSubscribe24

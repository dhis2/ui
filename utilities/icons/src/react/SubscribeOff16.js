import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgSubscribeOff16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M3.266 5.387l.814.813c-.04.195-.065.396-.075.6L4 7v2.333l-1.5 2V12h7.378l1 1h-.428a2.5 2.5 0 01-4.9 0H1.5v-2L3 9V7c0-.564.093-1.107.266-1.613zm-1.412-4.24l13 13-.708.707-13-13zM9.413 13H6.586l.019.052c.203.513.68.887 1.25.941L8 14a1.5 1.5 0 001.395-.948zM8.5 1v1.025A5 5 0 0113 7v2l1.5 2v1.378l-1-1v-.045l-1.5-2V7a4 4 0 00-6.213-3.333L5.07 2.95A4.973 4.973 0 017.5 2.025V1z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgSubscribeOff16.propTypes = {
    color: propTypes.string,
}
export default SvgSubscribeOff16

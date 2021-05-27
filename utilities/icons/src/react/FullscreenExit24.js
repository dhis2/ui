import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgFullscreenExit24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M22 12v10H12v-2h8v-8zm-12 1h.02c.023 0 .046.002.07.004L10 13a1.008 1.008 0 01.617.213c.063.05.12.107.17.17l-.08-.09a1.008 1.008 0 01.286.59l.003.03.003.055L11 14v5a1 1 0 01-1.993.117L9 19v-2.586l-3.293 3.293a1 1 0 01-1.497-1.32l.083-.094L7.584 15H5a1 1 0 01-.993-.883L4 14a1 1 0 01.883-.993L5 13zm2-11v2H4v7H2V2zm2 2a1 1 0 01.993.883L15 5v2.584l3.293-3.291a1 1 0 011.497 1.32l-.083.094L16.414 9H19a1 1 0 01.993.883L20 10a1 1 0 01-.883.993L19 11h-5.032l-.054-.004L14 11a1.008 1.008 0 01-.617-.213 1.008 1.008 0 01-.17-.17l.08.09a1.008 1.008 0 01-.286-.59l-.003-.028a1.006 1.006 0 01-.004-.07V5a1 1 0 011-1z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgFullscreenExit24.propTypes = {
    color: propTypes.string,
}
export default SvgFullscreenExit24

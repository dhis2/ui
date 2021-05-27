import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgFullscreen24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M10.707 13.293a1 1 0 01.083 1.32l-.083.094L5.415 20 8 20a1 1 0 01.993.883L9 21a1 1 0 01-.883.993L8 22H2.98c-.023 0-.046-.002-.07-.004L3 22a1.008 1.008 0 01-.617-.213 1.008 1.008 0 01-.17-.17l.08.09a1.008 1.008 0 01-.286-.59l-.003-.028A1.006 1.006 0 012 21.02V16a1 1 0 011.993-.117L4 16v2.584l5.293-5.291a1 1 0 011.414 0zM20 10v10H10v-2h8v-8zm-6-6v2H6v7H4V4zm7-2h.02c.023 0 .046.002.07.004L21 2a1.008 1.008 0 01.617.213c.063.05.12.107.17.17l-.08-.09a1.008 1.008 0 01.286.59l.003.03.003.055L22 3v5a1 1 0 01-1.993.117L20 8V5.414l-5.293 5.293a1 1 0 01-1.497-1.32l.083-.094L18.584 4H16a1 1 0 01-.993-.883L15 3a1 1 0 01.883-.993L16 2z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgFullscreen24.propTypes = {
    color: propTypes.string,
}
export default SvgFullscreen24

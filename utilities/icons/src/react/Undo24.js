import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgUndo24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M8.207 13.793a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.32.083l-.094-.083-4.5-4.5a1 1 0 01-.083-1.32l.083-.094 4.5-4.5a1 1 0 011.497 1.32l-.083.094L5.414 9H16a5 5 0 01.217 9.995L16 19h-2a1 1 0 01-.117-1.993L14 17h2a3 3 0 00.176-5.995L16 11H5.414z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgUndo24.propTypes = {
    color: propTypes.string,
}
export default SvgUndo24

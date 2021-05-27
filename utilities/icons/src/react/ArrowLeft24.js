import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgArrowLeft24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M11.707 5.293a1 1 0 01.083 1.32l-.083.094L7.414 11H18a1 1 0 01.117 1.993L18 13H7.414l4.293 4.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.32.083l-.094-.083-6-6-.073-.082a1.005 1.005 0 01-.007-.008l.08.09A1.008 1.008 0 014 12.02v-.037c0-.024.002-.048.004-.071L4 12a1.008 1.008 0 01.21-.613c.028-.035.054-.066.083-.094l6-6a1 1 0 011.414 0z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgArrowLeft24.propTypes = {
    color: propTypes.string,
}
export default SvgArrowLeft24

import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgArrowLeftMulti24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M14.707 5.293a1 1 0 01.083 1.32l-.083.094L10.415 11H21a1 1 0 01.117 1.993L21 13H10.415l4.292 4.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.32.083l-.094-.083-6-6-.073-.082a1.005 1.005 0 01-.007-.008l.08.09A1.008 1.008 0 017 12.02v-.037c0-.024.002-.048.004-.071L7 12a1.008 1.008 0 01.21-.613c.028-.035.054-.066.083-.094l6-6a1 1 0 011.414 0zm-5 0a1 1 0 01.083 1.32l-.083.094L4.415 12l5.292 5.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.32.083l-.094-.083-6-6a1 1 0 01-.083-1.32l.083-.094 6-6a1 1 0 011.414 0z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgArrowLeftMulti24.propTypes = {
    color: propTypes.string,
}
export default SvgArrowLeftMulti24

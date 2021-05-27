import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgArrowRightMulti24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M10.613 5.21l.094.083 6 6a1 1 0 01.083 1.32l-.083.094-6 6a1 1 0 01-1.497-1.32l.083-.094L13.584 13H3a1 1 0 01-.117-1.993L3 11h10.586L9.293 6.707a1 1 0 01-.083-1.32l.083-.094a1 1 0 011.32-.083zm5 0l.094.083 6 6a1 1 0 01.083 1.32l-.083.094-6 6a1 1 0 01-1.497-1.32l.083-.094L19.585 12l-5.292-5.293a1 1 0 01-.083-1.32l.083-.094a1 1 0 011.32-.083z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgArrowRightMulti24.propTypes = {
    color: propTypes.string,
}
export default SvgArrowRightMulti24

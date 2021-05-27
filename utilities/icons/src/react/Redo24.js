import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgRedo24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M17.113 4.71l.094.083 4.5 4.5a1 1 0 01.083 1.32l-.083.094-4.5 4.5a1 1 0 01-1.497-1.32l.083-.094L18.584 11H8a3 3 0 00-.176 5.995L8 17h2a1 1 0 01.117 1.993L10 19H8a5 5 0 01-.217-9.995L8 9h10.586l-2.793-2.793a1 1 0 01-.083-1.32l.083-.094a1 1 0 011.32-.083z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgRedo24.propTypes = {
    color: propTypes.string,
}
export default SvgRedo24

import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgDirectionNorth16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M8 5a5 5 0 110 10A5 5 0 018 5zm0 1a4 4 0 100 8 4 4 0 000-8zM7 9.333V12H6V8h1l2 2.667V8h1v4H9zM7.646.646a.5.5 0 01.708 0l2.5 2.5A.5.5 0 0110.5 4h-5a.5.5 0 01-.354-.854zM8 1.707L6.706 3h2.587z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgDirectionNorth16.propTypes = {
    color: propTypes.string,
}
export default SvgDirectionNorth16

import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgEdit16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M10.613 2.624l.094.083 2.586 2.586a1 1 0 01.083 1.32l-.083.094L6 14H2v-4l7.293-7.293a1 1 0 011.32-.083zm-.613.79l-6.793 6.792 2.585 2.585L12.586 6z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgEdit16.propTypes = {
    color: propTypes.string,
}
export default SvgEdit16

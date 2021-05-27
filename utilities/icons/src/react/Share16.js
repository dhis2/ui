import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgShare16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M11.5 1a2.5 2.5 0 11-1.913 4.11l.024.027-3.73 2.098a2.498 2.498 0 01-.003 1.539l.003-.009 3.73 2.098-.024.027a2.5 2.5 0 11-.465.837l-.003.008L5.39 9.636l.023-.026a2.5 2.5 0 110-3.22l-.024-.027 3.73-2.098A2.5 2.5 0 0111.5 1zm0 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-8-4.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm8-4.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgShare16.propTypes = {
    color: propTypes.string,
}
export default SvgShare16

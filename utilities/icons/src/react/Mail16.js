import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgMail16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M14 2a1 1 0 011 1v10a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1zm0 1.706l-4.94 4.94a1.5 1.5 0 01-2.007.103l-.114-.103L2 3.707V13h12zM13.292 3H2.707l4.94 4.94a.5.5 0 00.637.057l.07-.058z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgMail16.propTypes = {
    color: propTypes.string,
}
export default SvgMail16

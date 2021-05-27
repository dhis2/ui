import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgView24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M12 5c5 0 10 4 10 7s-5 7-10 7-10-4-10-7 5-7 10-7zm0 2c-3.779 0-8 3.096-8 5s4.221 5 8 5 8-3.096 8-5-4.221-5-8-5zm0 2a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 100 2 1 1 0 000-2z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgView24.propTypes = {
    color: propTypes.string,
}
export default SvgView24

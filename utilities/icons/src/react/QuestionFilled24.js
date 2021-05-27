import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgQuestionFilled24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 14a1 1 0 100 2 1 1 0 000-2zm0-10a4 4 0 00-4 4h2l.005-.15A2 2 0 1112 12h-1v3h2v-1.127l.155-.042A4.002 4.002 0 0012 6z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgQuestionFilled24.propTypes = {
    color: propTypes.string,
}
export default SvgQuestionFilled24

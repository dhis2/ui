import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgQuestionFilled16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M8 1a7 7 0 110 14A7 7 0 018 1zm0 10a1 1 0 100 2 1 1 0 000-2zm0-7.5A2.5 2.5 0 005.5 6h1l.007-.144A1.5 1.5 0 118 7.5h-.5V10h1V8.449l.14-.031A2.501 2.501 0 008 3.5z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgQuestionFilled16.propTypes = {
    color: propTypes.string,
}
export default SvgQuestionFilled16

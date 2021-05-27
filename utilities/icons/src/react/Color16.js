import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgColor16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M8 1c4 3.124 6 5.79 6 8A6 6 0 112 9c0-2.21 2-4.876 6-8zm0 1.278l-.05.041C4.622 5.033 3 7.299 3 9a5 5 0 009 3.001L8 12v-1h4.584c.267-.612.416-1.289.416-2H8V8l4.834.001c-.194-.612-.556-1.28-1.09-2L8 6V5h2.923c-.682-.758-1.533-1.566-2.556-2.42z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgColor16.propTypes = {
    color: propTypes.string,
}
export default SvgColor16

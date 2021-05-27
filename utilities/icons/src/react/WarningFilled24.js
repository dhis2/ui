import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgWarningFilled24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M12.847 2.794l.056.102 8.416 17.674a1 1 0 01-.786 1.423l-.117.007H3.584a1 1 0 01-.947-1.322l.044-.108 8.416-17.674a1 1 0 011.75-.102zM12 18a1 1 0 100 2 1 1 0 000-2zm1-9h-2v7h2z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgWarningFilled24.propTypes = {
    color: propTypes.string,
}
export default SvgWarningFilled24

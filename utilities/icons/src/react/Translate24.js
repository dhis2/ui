import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgTranslate24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M11.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0013.07 6H15V4H9V2H7v2H1v1.99h10.17C10.5 7.92 9.44 9.75 8 11.35 7.07 10.32 6.3 9.19 5.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-4.09 4.02L4 18l4-4 3.11 3.11zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2zm-2.62 7l1.62-4.33L19.12 17z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgTranslate24.propTypes = {
    color: propTypes.string,
}
export default SvgTranslate24

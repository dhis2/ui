import PropTypes from 'prop-types'
import * as React from 'react'
function SvgFlag24({ color, dataTest, ariaLabel }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
            data-test={dataTest}
        >
            <path
                d="M6 2v2h13.066a1 1 0 01.816 1.578L16.75 10l3.132 4.422A1 1 0 0119.066 16H6v6H4V2zm11.131 4H6v8h11.132l-2.833-4z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    )
}
SvgFlag24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgFlag24

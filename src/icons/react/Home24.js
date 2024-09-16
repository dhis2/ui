import PropTypes from 'prop-types'
import * as React from 'react'
function SvgHome24({ color, dataTest, ariaLabel }) {
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
                d="M3 21V10.52l-.427.3-1.146-1.64L12 1.78l10.573 7.4-1.146 1.64-.427-.3V21zm9-16.78l-7 4.9V19h4v-7h6v7h4V9.12zM13 14h-2v5h2z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgHome24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgHome24

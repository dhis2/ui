import PropTypes from 'prop-types'
import * as React from 'react'
function SvgStarFilled24({ color, dataTest, ariaLabel }) {
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
                d="M8.397 7.041l-6.051.88-.114.022a1 1 0 00-.44 1.683l4.378 4.268-1.033 6.027-.013.11a1 1 0 001.463.944L12 18.13l5.413 2.845.1.047a1 1 0 001.35-1.1l-1.034-6.028 4.38-4.268.078-.086a1 1 0 00-.633-1.62l-6.052-.879-2.705-5.484a1 1 0 00-1.794 0z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgStarFilled24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgStarFilled24

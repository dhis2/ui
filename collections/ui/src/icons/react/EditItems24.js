import PropTypes from 'prop-types'
import * as React from 'react'
function SvgEditItems24({ color, dataTest, ariaLabel }) {
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
                d="M17.268 9.697a2 2 0 012.828 0l1.414 1.414a2 2 0 010 2.828l-8.07 8.071H9.196v-4.242zM6 16v2H4v2h2v2H3a1 1 0 01-1-1v-4a1 1 0 011-1zm12.682-4.89l-7.485 7.486v1.414h1.415l7.484-7.485zM10 9v2H4v2h6v2H3a1 1 0 01-1-1v-4a1 1 0 011-1zm5-7a1 1 0 011 1v4a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1zm-1 2H4v2h10z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgEditItems24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgEditItems24

import PropTypes from 'prop-types'
import * as React from 'react'
function SvgSync24({ color, dataTest, ariaLabel }) {
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
                d="M18 7h.02c.023 0 .046.002.07.004L18 7a1.008 1.008 0 01.625.22l.082.073 3 3a1 1 0 01-1.32 1.497l-.094-.083L19 10.415V18a3 3 0 01-2.824 2.995L16 21H8a1 1 0 01-.117-1.993L8 19h8a1 1 0 00.993-.883L17 18v-7.587l-1.293 1.294a1 1 0 01-1.32.083l-.094-.083a1 1 0 01-.083-1.32l.083-.094 3-3 .082-.073.008-.007-.09.08A1.008 1.008 0 0117.982 7H18zm-2-4a1 1 0 01.117 1.993L16 5H8a1 1 0 00-.993.883L7 6v7.584l1.293-1.291a1 1 0 011.32-.083l.094.083a1 1 0 01.083 1.32l-.083.094-3 3a1.006 1.006 0 01-.09.08l.09-.08a1.008 1.008 0 01-.674.292L6 17h-.032l-.054-.004L6 17a1.008 1.008 0 01-.613-.21 1.037 1.037 0 01-.094-.083l-3-3a1 1 0 011.32-1.497l.094.083L5 13.586V6a3 3 0 012.824-2.995L8 3z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgSync24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgSync24

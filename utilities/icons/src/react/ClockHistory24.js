import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgClockHistory24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M12 2c5.523 0 10 4.477 10 10 0 5.43-4.327 9.848-9.72 9.996L12 22v-2a8 8 0 10-7.996-8.25L4 12H2C2 6.477 6.477 2 12 2zM7.707 12.293a1 1 0 01.083 1.32l-.083.094L5.414 16H10a1 1 0 01.117 1.993L10 18H5.414l2.293 2.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.32.083l-.094-.083-4-4-.073-.082a1.005 1.005 0 01-.007-.008l.08.09A1.008 1.008 0 012 17.02v-.037c0-.024.002-.048.004-.071L2 17a1.008 1.008 0 01.21-.613c.028-.035.054-.066.083-.094l4-4a1 1 0 011.414 0zM13 6v5.585l2.707 2.708-1.414 1.414L11 12.414V6z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgClockHistory24.propTypes = {
    color: propTypes.string,
}
export default SvgClockHistory24

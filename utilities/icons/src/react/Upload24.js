import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgUpload24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M20 14a1 1 0 01.993.883L21 15v3a3 3 0 01-2.824 2.995L18 21H6a3 3 0 01-2.995-2.824L3 18v-3a1 1 0 011.993-.117L5 15v3a1 1 0 00.883.993L6 19h12a1 1 0 00.993-.883L19 18v-3a1 1 0 011-1zM12 4h.02c.023 0 .046.002.07.004L12 4a1.008 1.008 0 01.625.22l.082.073 4 4a1 1 0 01-1.32 1.497l-.094-.083L13 7.415V16a1 1 0 01-1.993.117L11 16V7.413L8.707 9.707a1 1 0 01-1.32.083l-.094-.083a1 1 0 01-.083-1.32l.083-.094 4-4 .082-.073.008-.007-.09.08A1.008 1.008 0 0111.982 4H12z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgUpload24.propTypes = {
    color: propTypes.string,
}
export default SvgUpload24

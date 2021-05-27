import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgArrowRightMulti16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M5.784 2.589l.07.057 5 5 .011.013a.503.503 0 01.033.039l-.044-.052A.502.502 0 0111 8v.02a.503.503 0 01-.005.052L11 8a.502.502 0 01-.089.284l-.013.018a.503.503 0 01-.033.04l-.011.012-5 5a.5.5 0 01-.765-.638l.057-.07L9.293 8.5H1.5a.5.5 0 01-.09-.992L1.5 7.5h7.793L5.146 3.354a.5.5 0 01-.057-.638l.057-.07a.5.5 0 01.638-.057zm4 0l.07.057 5 5a.5.5 0 01.057.638l-.057.07-5 5a.5.5 0 01-.765-.638l.057-.07L13.793 8 9.146 3.354a.5.5 0 01-.057-.638l.057-.07a.5.5 0 01.638-.057z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgArrowRightMulti16.propTypes = {
    color: propTypes.string,
}
export default SvgArrowRightMulti16

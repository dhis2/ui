import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgLogOut16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M7 9c1.014 0 1.94.378 2.646 1H5a3 3 0 00-2.995 2.824L2 13v1h8v-1h1v2H1v-2a4 4 0 014-4zm5.784-.411l.07.057 2.5 2.5.011.013a.503.503 0 01.033.039l-.044-.052a.502.502 0 01.146.354v.02a.503.503 0 01-.005.052l.005-.072a.502.502 0 01-.089.284l-.013.018a.503.503 0 01-.033.04l-.011.012-2.5 2.5a.5.5 0 01-.765-.638l.057-.07L13.792 12H7a.5.5 0 01-.09-.992L7 11h6.794l-1.648-1.646a.5.5 0 01-.057-.638l.057-.07a.5.5 0 01.638-.057zM6 2a3 3 0 110 6 3 3 0 010-6zm0 1a2 2 0 100 4 2 2 0 000-4z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgLogOut16.propTypes = {
    color: propTypes.string,
}
export default SvgLogOut16

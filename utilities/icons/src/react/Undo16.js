import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgUndo16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M4.854 10.146a.5.5 0 01.057.638l-.057.07a.5.5 0 01-.638.057l-.07-.057-3-3-.011-.013a.503.503 0 01-.033-.039l.044.052A.502.502 0 011 7.5v-.01c0-.022.002-.043.005-.064L1 7.5a.502.502 0 01.089-.284l.013-.018a.503.503 0 01.033-.04l.011-.012 3-3a.5.5 0 01.765.638l-.057.07L2.706 7H12a3 3 0 01.176 5.995L12 13H9.5a.5.5 0 01-.09-.992L9.5 12H12a2 2 0 00.15-3.995L12 8H2.708z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgUndo16.propTypes = {
    color: propTypes.string,
}
export default SvgUndo16

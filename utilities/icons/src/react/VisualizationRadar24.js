import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgVisualizationRadar24({ color }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            color={color}
        >
            <path
                fill="currentColor"
                d="M12 1a3 3 0 012.958 2.498A9.002 9.002 0 118.12 20.123a3 3 0 01-4.242-4.243A9.004 9.004 0 019.04 3.498 3.002 3.002 0 0112 1zm2.6 4.498l-.067.11a2.999 2.999 0 01-5.132-.11 7.002 7.002 0 00-3.719 9.52l.142-.013L6 15a3 3 0 012.983 3.318A7 7 0 1014.6 5.498zM12 8a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4z"
            />
        </svg>
    )
}

SvgVisualizationRadar24.propTypes = {
    color: propTypes.string,
}
export default SvgVisualizationRadar24

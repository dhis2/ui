import PropTypes from 'prop-types'
import * as React from 'react'
function SvgFaceAdd24({ color, dataTest, ariaLabel }) {
    return (
        <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color={color}
            data-test={dataTest}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21 0h-2v3h-3v2h3v3h2V5h3V3h-3V0zM9.5 11a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.5 4a4.001 4.001 0 01-3.668-2.4l-1.832.8a6.001 6.001 0 0011 0l-1.832-.8A4.001 4.001 0 0112 15zm4-5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM12 2c.685 0 1.354.069 2 .2v2.052A8 8 0 1019.748 10H21.8c.131.646.2 1.315.2 2 0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgFaceAdd24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgFaceAdd24

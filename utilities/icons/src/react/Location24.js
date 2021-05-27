import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgLocation24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M12 2a7.5 7.5 0 017.5 7.5C19.5 16 12 21 12 21l-.301-.212C10.299 19.77 4.5 15.216 4.5 9.5A7.5 7.5 0 0112 2zm0 2a5.5 5.5 0 00-5.5 5.5c0 2.258 1.19 4.598 3.23 6.842a21.334 21.334 0 001.956 1.888l.314.26.314-.26a21.62 21.62 0 001.578-1.483l.378-.405c2.04-2.244 3.23-4.584 3.23-6.842A5.5 5.5 0 0012 4zm0 3a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 100 2 1 1 0 000-2z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgLocation24.propTypes = {
    color: propTypes.string,
}
export default SvgLocation24

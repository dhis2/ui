import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgReply24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M10 17.586a1 1 0 01-1.613.79l-.094-.083-5.586-5.586a1 1 0 01-.083-1.32l.083-.094 5.586-5.586a1 1 0 011.7.59l.007.117V8L16 8l.47.005C22.955 8.142 22 11.253 22 22h-1c0-4-1.667-6-5-6h-6zM8 8.828L4.829 12 8 15.171V14h8c1.598 0 2.94.37 4.007 1.07l.032.021-.015-.896c-.043-1.604-.159-2.393-.392-2.985l-.069-.163c-.32-.703-1.056-1.023-3.298-1.046L10 10H8z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgReply24.propTypes = {
    color: propTypes.string,
}
export default SvgReply24

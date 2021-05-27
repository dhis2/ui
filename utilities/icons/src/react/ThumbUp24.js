import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgThumbUp24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M12.54 3a3 3 0 012.942 2.412L16 8h3a2 2 0 012 2v6a5 5 0 01-5 5H4a1 1 0 01-1-1v-9a1 1 0 011-1h4l2-2 1-5zM5 12v7h1v-7zm3 7h8a3 3 0 002.995-2.824L19 16v-6h-4.64l-.839-4.196a1 1 0 00-.863-.797l-.02-.002-.796 3.981L8.828 12H8z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgThumbUp24.propTypes = {
    color: propTypes.string,
}
export default SvgThumbUp24

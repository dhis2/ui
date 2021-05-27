import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgImportItems24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M18 13a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2v-3a2 2 0 012-2zm-9 0a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3a2 2 0 012-2zm9 2h-3v3h3zm-9 0H6v3h3zM7.613 2.71l.094.083 3.5 3.5a1 1 0 01.083 1.32l-.083.094-3.5 3.5a1 1 0 01-1.497-1.32l.083-.094L8.085 8H3a1 1 0 01-.117-1.993L3 6h5.085L6.293 4.207a1 1 0 01-.083-1.32l.083-.094a1 1 0 011.32-.083zM18 4a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2V6a2 2 0 012-2zm0 2h-3v3h3z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgImportItems24.propTypes = {
    color: propTypes.string,
}
export default SvgImportItems24

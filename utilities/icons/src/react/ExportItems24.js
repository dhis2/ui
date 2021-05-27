import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgExportItems24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M18.613 12.71l.094.083 3.5 3.5a1 1 0 01.083 1.32l-.083.094-3.5 3.5a1 1 0 01-1.497-1.32l.083-.094L19.085 18H14a1 1 0 01-.117-1.993L14 16h5.085l-1.792-1.793a1 1 0 01-.083-1.32l.083-.094a1 1 0 011.32-.083zM9 13a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3a2 2 0 012-2zm0 2H6v3h3zM9 4a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2zm9 0a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2V6a2 2 0 012-2zM9 6H6v3h3zm9 0h-3v3h3z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgExportItems24.propTypes = {
    color: propTypes.string,
}
export default SvgExportItems24

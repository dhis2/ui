import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgLink24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M14.207 6.793a4.536 4.536 0 01.161 6.245l-.16.17-.5.5-1.415-1.415.5-.5a2.536 2.536 0 00-3.453-3.71l-.133.124-5 5a2.536 2.536 0 003.453 3.71l.133-.124.5-.5 1.414 1.414-.5.5a4.536 4.536 0 01-6.575-6.245l.16-.17 5-5a4.536 4.536 0 016.415 0zm7-2a4.536 4.536 0 01.161 6.245l-.16.17-5 5a4.536 4.536 0 01-6.576-6.246l.16-.17.5-.5 1.415 1.415-.5.5a2.536 2.536 0 003.453 3.71l.133-.124 5-5a2.536 2.536 0 00-3.453-3.71l-.133.124-.5.5-1.414-1.414.5-.5a4.536 4.536 0 016.414 0z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgLink24.propTypes = {
    color: propTypes.string,
}
export default SvgLink24

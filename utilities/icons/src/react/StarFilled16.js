import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgStarFilled16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M5.611 5.211l-4.34.631-.084.02a.5.5 0 00-.193.833l3.14 3.06-.741 4.324-.008.08a.5.5 0 00.733.447L8 12.564l3.883 2.042.074.032a.5.5 0 00.651-.56l-.742-4.323 3.141-3.06.057-.065a.5.5 0 00-.334-.788l-4.341-.631-1.94-3.932a.5.5 0 00-.896 0z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgStarFilled16.propTypes = {
    color: propTypes.string,
}
export default SvgStarFilled16

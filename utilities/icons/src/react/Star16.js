import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgStar16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M5.611 5.211l-4.34.631-.084.02a.5.5 0 00-.193.833l3.14 3.06-.741 4.324-.008.08a.5.5 0 00.733.447L8 12.564l3.883 2.042.074.032a.5.5 0 00.651-.56l-.742-4.323 3.141-3.06.057-.065a.5.5 0 00-.334-.788l-4.341-.631-1.94-3.932a.5.5 0 00-.896 0zM8 2.63l1.609 3.26.051.083a.5.5 0 00.325.19l3.597.522-2.602 2.539-.063.074a.5.5 0 00-.081.368l.614 3.582-3.217-1.69-.09-.037a.5.5 0 00-.376.036L4.55 13.248l.615-3.582.007-.097a.5.5 0 00-.15-.345L2.416 6.685l3.598-.522a.5.5 0 00.376-.273z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgStar16.propTypes = {
    color: propTypes.string,
}
export default SvgStar16

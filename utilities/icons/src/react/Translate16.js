import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgTranslate16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M12 7l3 7h-1l-.857-2H9.857L9 14H8l3-7zm-.5 1.167L10.286 11h2.428zM6 2v1h4v1H8.39c-.328 1.093-1.122 2.337-2.38 3.743.13.137.259.264.384.382.456.43.853.725 1.155.858l.11.043-.317.948c-.484-.16-1.024-.547-1.634-1.122a13.144 13.144 0 01-.381-.375 36.535 36.535 0 01-1.67 1.606l-.325.29-.664-.747a35.867 35.867 0 001.98-1.888l.107.124c-.404-.453-.801-.938-1.175-1.422l-.434-.576-.053-.073.814-.582.267.362.197.257c.308.399.631.797.96 1.174C6.343 5.86 7.01 4.856 7.334 4H1V3h4V2z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgTranslate16.propTypes = {
    color: propTypes.string,
}
export default SvgTranslate16

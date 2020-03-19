import React from 'react'
import propTypes from '@dhis2/prop-types'
import { colors } from '@dhis2/ui-constants'

const InputPlaceholder = ({ placeholder, className, dataTest }) => {
    if (!placeholder) {
        return null
    }

    return (
        <div className={className} data-test={dataTest}>
            {placeholder}

            <style jsx>{`
                div {
                    color: ${colors.grey600};
                    user-select: none;
                }
            `}</style>
        </div>
    )
}

InputPlaceholder.propTypes = {
    dataTest: propTypes.string.isRequired,
    className: propTypes.string,
    placeholder: propTypes.string,
}

export { InputPlaceholder }

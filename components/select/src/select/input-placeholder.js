import { colors } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

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
    dataTest: PropTypes.string.isRequired,
    className: PropTypes.string,
    placeholder: PropTypes.string,
}

export { InputPlaceholder }

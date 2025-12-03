import { colors } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

export function Placeholder({ placeholder, className, dataTest }) {
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

Placeholder.propTypes = {
    dataTest: PropTypes.string.isRequired,
    className: PropTypes.string,
    placeholder: PropTypes.string,
}

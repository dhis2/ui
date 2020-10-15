import propTypes from '@dhis2/prop-types'
import { colors, spacers } from '@dhis2/ui-constants'
import React from 'react'

const InputPrefix = ({ prefix, className, dataTest }) => {
    if (!prefix) {
        return null
    }

    return (
        <div className={className} data-test={dataTest}>
            {prefix}

            <style jsx>{`
                div {
                    color: ${colors.grey600};
                    padding-right: ${spacers.dp4};
                    font-size: 14px;
                    user-select: none;
                }
            `}</style>
        </div>
    )
}

InputPrefix.propTypes = {
    dataTest: propTypes.string.isRequired,
    className: propTypes.string,
    prefix: propTypes.string,
}

export { InputPrefix }

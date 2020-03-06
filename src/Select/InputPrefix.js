import React from 'react'
import propTypes from '@dhis2/prop-types'
import { colors, spacers } from '../theme.js'

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

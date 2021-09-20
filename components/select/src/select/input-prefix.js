import { colors, spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
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
    dataTest: PropTypes.string.isRequired,
    className: PropTypes.string,
    prefix: PropTypes.string,
}

export { InputPrefix }

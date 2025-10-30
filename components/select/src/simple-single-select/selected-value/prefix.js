import { colors, spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

export function Prefix({ prefix, className, dataTest }) {
    return (
        <div className={className} data-test={dataTest}>
            {prefix}

            <style jsx>{`
                div {
                    color: ${colors.grey600};
                    padding-inline-end: ${spacers.dp12};
                    font-size: 14px;
                    user-select: none;
                }
            `}</style>
        </div>
    )
}

Prefix.propTypes = {
    dataTest: PropTypes.string.isRequired,
    className: PropTypes.string,
    prefix: PropTypes.string,
}

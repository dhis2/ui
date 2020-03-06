import propTypes from '@dhis2/prop-types'
import React from 'react'

import { StatusIcon } from '../icons/Status.js'
import { spacers } from '@dhis2/ui-constants'

const Icon = ({ icon, success, warning, critical, info, dataTest }) => {
    if (icon === false) {
        return null
    }

    return (
        <div data-test={dataTest}>
            {React.isValidElement(icon) ? (
                icon
            ) : (
                <StatusIcon
                    valid={success}
                    error={critical}
                    warning={warning}
                    info={info}
                />
            )}
            <style jsx>{`
                div {
                    margin-right: ${spacers.dp16};
                }
                div :global(svg) {
                    width: 24px;
                    height: 24px;
                }
            `}</style>
        </div>
    )
}

const iconPropType = propTypes.oneOfType([propTypes.bool, propTypes.element])
const alertStatePropType = propTypes.mutuallyExclusive(
    ['success', 'warning', 'critical', 'info'],
    propTypes.bool
)

Icon.propTypes = {
    dataTest: propTypes.string.isRequired,
    critical: alertStatePropType,
    icon: iconPropType,
    info: alertStatePropType,
    success: alertStatePropType,
    warning: alertStatePropType,
}

export { Icon, iconPropType }

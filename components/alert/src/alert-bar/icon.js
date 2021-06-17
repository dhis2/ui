import propTypes from '@dhis2/prop-types'
import { spacers, colors } from '@dhis2/ui-constants'
import {
    IconErrorFilled24,
    IconInfoFilled24,
    IconWarningFilled24,
    IconCheckmark24,
} from '@dhis2/ui-icons'
import React from 'react'

const StatusIcon = ({ error, warning, valid, info, defaultTo }) => {
    if (error) {
        return <IconErrorFilled24 color={colors.white} />
    }
    if (warning) {
        return <IconWarningFilled24 color={colors.yellow900} />
    }
    if (valid) {
        return <IconCheckmark24 color={colors.white} />
    }
    if (info) {
        return <IconInfoFilled24 color={colors.white} />
    }

    return defaultTo
}

StatusIcon.defaultProps = {
    defaultTo: null,
}

StatusIcon.propTypes = {
    className: propTypes.string,
    defaultTo: propTypes.element,
    error: propTypes.bool,
    info: propTypes.bool,
    valid: propTypes.bool,
    warning: propTypes.bool,
}

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

import { mutuallyExclusive } from '@dhis2/prop-types'
import { spacers, colors } from '@dhis2/ui-constants'
import {
    IconErrorFilled24,
    IconInfoFilled24,
    IconWarningFilled24,
    IconCheckmark24,
} from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
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
    defaultTo: PropTypes.element,
    error: PropTypes.bool,
    info: PropTypes.bool,
    valid: PropTypes.bool,
    warning: PropTypes.bool,
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
                    margin-inline-end: ${spacers.dp16};
                }
            `}</style>
        </div>
    )
}

const iconPropType = PropTypes.oneOfType([PropTypes.bool, PropTypes.element])
const alertStatePropType = mutuallyExclusive(
    ['success', 'warning', 'critical', 'info'],
    PropTypes.bool
)

Icon.propTypes = {
    dataTest: PropTypes.string.isRequired,
    critical: alertStatePropType,
    icon: iconPropType,
    info: alertStatePropType,
    success: alertStatePropType,
    warning: alertStatePropType,
}

export { Icon, iconPropType }

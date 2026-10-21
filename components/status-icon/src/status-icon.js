import { theme } from '@dhis2/ui-constants'
import {
    IconErrorFilled24,
    IconWarningFilled24,
    IconCheckmark24,
} from '@dhis2/ui-icons'
import { CircularLoader } from '@dhis2-ui/loader'
import PropTypes from 'prop-types'
import React from 'react'

const getIcon = ({ error, warning, valid }) => {
    if (error) {
        return <IconErrorFilled24 color={theme.error} />
    }
    if (warning) {
        return <IconWarningFilled24 color={theme.warning} />
    }
    if (valid) {
        return <IconCheckmark24 color={theme.valid} />
    }

    return null
}

export const StatusIcon = ({
    error,
    warning,
    valid,
    loading,
    'aria-label': ariaLabel,
}) => {
    const icon = getIcon({ error, warning, valid })

    if (!icon && !loading) {
        return null
    }

    return (
        <span
            role={icon && ariaLabel ? 'img' : undefined}
            aria-label={icon ? ariaLabel : undefined}
            aria-hidden={ariaLabel ? undefined : 'true'}
        >
            {icon || <CircularLoader small aria-label={ariaLabel} />}
            <style jsx>{`
                span {
                    display: inline-flex;
                }
            `}</style>
        </span>
    )
}

StatusIcon.propTypes = {
    /** Accessible label for standalone use */
    'aria-label': PropTypes.string,
    error: PropTypes.bool,
    loading: PropTypes.bool,
    valid: PropTypes.bool,
    warning: PropTypes.bool,
}

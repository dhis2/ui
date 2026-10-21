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

    if (icon) {
        return (
            <span
                role={ariaLabel ? 'img' : undefined}
                aria-label={ariaLabel}
                aria-hidden={ariaLabel ? undefined : 'true'}
            >
                {icon}
                <style jsx>{`
                    span {
                        display: inline-flex;
                    }
                `}</style>
            </span>
        )
    }
    if (loading) {
        return <CircularLoader small aria-label={ariaLabel} />
    }

    return null
}

StatusIcon.propTypes = {
    /** Accessible label for standalone use */
    'aria-label': PropTypes.string,
    error: PropTypes.bool,
    loading: PropTypes.bool,
    valid: PropTypes.bool,
    warning: PropTypes.bool,
}

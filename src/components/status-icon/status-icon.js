import { theme } from '../../constants/index.js'
import {
    IconErrorFilled24,
    IconWarningFilled24,
    IconCheckmark24,
} from '../../icons/index.js'
import { CircularLoader } from '../loader/index.js'
import PropTypes from 'prop-types'
import React from 'react'

export const StatusIcon = ({ error, warning, valid, loading }) => {
    if (error) {
        return <IconErrorFilled24 color={theme.error} />
    }
    if (warning) {
        return <IconWarningFilled24 color={theme.warning} />
    }
    if (valid) {
        return <IconCheckmark24 color={theme.valid} />
    }
    if (loading) {
        return <CircularLoader small />
    }

    return null
}

StatusIcon.propTypes = {
    error: PropTypes.bool,
    loading: PropTypes.bool,
    valid: PropTypes.bool,
    warning: PropTypes.bool,
}

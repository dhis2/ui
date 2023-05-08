import { mutuallyExclusive } from '@dhis2/prop-types'
import { colors, spacers } from '@dhis2/ui-constants'
import {
    IconErrorFilled24,
    IconWarningFilled24,
    IconInfoFilled24,
    IconCheckmarkCircle24,
} from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React from 'react'

export const NoticeBoxIcon = ({ valid, warning, error, dataTest }) => {
    // Info is the default icon
    let color = colors.blue900
    let Icon = IconInfoFilled24

    if (valid) {
        color = colors.green700
        Icon = IconCheckmarkCircle24
    }

    if (warning) {
        color = colors.yellow700
        Icon = IconWarningFilled24
    }

    if (error) {
        color = colors.red700
        Icon = IconErrorFilled24
    }

    return (
        <div data-test={dataTest}>
            <Icon color={color} />

            <style jsx>{`
                margin-inline-end: ${spacers.dp12};
                height: ${spacers.dp24};
            `}</style>
        </div>
    )
}

NoticeBoxIcon.propTypes = {
    dataTest: PropTypes.string.isRequired,
    error: mutuallyExclusive(['error', 'valid', 'warning'], PropTypes.bool),
    valid: mutuallyExclusive(['error', 'valid', 'warning'], PropTypes.bool),
    warning: mutuallyExclusive(['error', 'valid', 'warning'], PropTypes.bool),
}

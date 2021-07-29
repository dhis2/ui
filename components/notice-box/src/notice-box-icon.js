import propTypes from '@dhis2/prop-types'
import { colors, spacers } from '@dhis2/ui-constants'
import {
    IconErrorFilled24,
    IconWarningFilled24,
    IconInfoFilled24,
} from '@dhis2/ui-icons'
import React from 'react'

export const NoticeBoxIcon = ({ warning, error, dataTest }) => {
    // Info is the default icon
    let color = colors.blue900
    let Icon = IconInfoFilled24

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
                margin-right: ${spacers.dp12};
            `}</style>
        </div>
    )
}

NoticeBoxIcon.propTypes = {
    dataTest: propTypes.string.isRequired,
    error: propTypes.mutuallyExclusive(['error', 'warning'], propTypes.bool),
    warning: propTypes.mutuallyExclusive(['error', 'warning'], propTypes.bool),
}

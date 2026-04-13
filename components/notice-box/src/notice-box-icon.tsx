import { colors, spacers } from '@dhis2/ui-constants'
import {
    IconErrorFilled24,
    IconWarningFilled24,
    IconInfoFilled24,
    IconCheckmarkCircle24,
} from '@dhis2/ui-icons'
import React from 'react'

export interface NoticeBoxIconProps {
    dataTest: string
    error?: boolean
    valid?: boolean
    warning?: boolean
}

export const NoticeBoxIcon = ({
    valid,
    warning,
    error,
    dataTest,
}: NoticeBoxIconProps) => {
    // Info is the default icon
    let color = colors.blue900
    let Icon: typeof IconInfoFilled24 = IconInfoFilled24

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

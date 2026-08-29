import { colors, spacers } from '@dhis2/ui-constants'
import {
    IconCheckmarkCircle16,
    IconCheckmarkCircle24,
    IconErrorFilled16,
    IconErrorFilled24,
    IconInfoFilled16,
    IconInfoFilled24,
    IconWarningFilled16,
    IconWarningFilled24,
} from '@dhis2/ui-icons'
import React from 'react'

export interface NoticeBoxIconProps {
    dataTest: string
    dense?: boolean
    error?: boolean
    icon?: React.ReactNode
    valid?: boolean
    warning?: boolean
}

export const NoticeBoxIcon = ({
    valid,
    warning,
    error,
    dataTest,
    dense = false,
    icon,
}: NoticeBoxIconProps) => {
    const marginInlineEnd = dense ? spacers.dp8 : spacers.dp12

    if (icon != null) {
        return (
            <div data-test={dataTest}>
                {icon}
                <style jsx>{`
                    div {
                        display: flex;
                        flex-shrink: 0;
                        align-items: flex-start;
                        line-height: 0;
                        margin-inline-end: ${marginInlineEnd};
                    }
                `}</style>
            </div>
        )
    }

    let color = colors.blue900
    let Icon = dense ? IconInfoFilled16 : IconInfoFilled24

    if (valid) {
        color = colors.green700
        Icon = dense ? IconCheckmarkCircle16 : IconCheckmarkCircle24
    }

    if (warning) {
        color = colors.yellow700
        Icon = dense ? IconWarningFilled16 : IconWarningFilled24
    }

    if (error) {
        color = colors.red700
        Icon = dense ? IconErrorFilled16 : IconErrorFilled24
    }

    return (
        <div data-test={dataTest}>
            <Icon color={color} />

            <style jsx>{`
                margin-inline-end: ${marginInlineEnd};
                margin-block-start: ${dense ? '1px' : '0'};
                height: ${dense ? spacers.dp16 : spacers.dp24};
            `}</style>
        </div>
    )
}

import { spacers, colors } from '@dhis2/ui-constants'
import {
    IconErrorFilled24,
    IconInfoFilled24,
    IconWarningFilled24,
    IconCheckmark24,
} from '@dhis2/ui-icons'
import React from 'react'

interface StatusIconProps {
    defaultTo?: React.ReactElement | null
    error?: boolean
    info?: boolean
    valid?: boolean
    warning?: boolean
}

const StatusIcon = ({
    error,
    warning,
    valid,
    info,
    defaultTo = null,
}: StatusIconProps) => {
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

interface IconProps {
    dataTest: string
    critical?: boolean
    icon?: boolean | React.ReactElement
    info?: boolean
    success?: boolean
    warning?: boolean
}

const Icon = ({ icon, success, warning, critical, info, dataTest }: IconProps) => {
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

export { Icon }
export type { IconProps }

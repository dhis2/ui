import { spacers, theme, colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import React from 'react'

export interface HelpProps {
    children?: string
    className?: string
    dataTest?: string
    error?: boolean
    valid?: boolean
    warning?: boolean
}

const Help = ({
    children,
    valid,
    error,
    warning,
    className,
    dataTest = 'dhis2-uicore-help',
}: HelpProps) => (
    <p
        className={cx(className, {
            valid,
            error,
            warning,
        })}
        data-test={dataTest}
    >
        {children}

        <style jsx>{`
            p {
                margin-top: ${spacers.dp4};
                margin-right: 0;
                margin-bottom: 0;
                margin-left: 0;
                font-size: 12px;
                line-height: 14px;
                color: ${theme.default};
            }

            .valid {
                color: ${colors.blue700};
            }

            .error {
                color: ${theme.error};
            }

            .warning {
                color: ${colors.yellow800};
            }
        `}</style>
    </p>
)

export { Help }

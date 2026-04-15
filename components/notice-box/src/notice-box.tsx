import { spacers, colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import React from 'react'
import { NoticeBoxContent } from './notice-box-content.tsx'
import { NoticeBoxIcon } from './notice-box-icon.tsx'

export interface NoticeBoxProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
    /** Applies 'error' message styles. Mutually exclusive with the `valid` and `warning` props */
    error?: boolean
    title?: string
    /** Applies 'valid' message styles. Mutually exclusive with the `error` and `warning` props */
    valid?: boolean
    /** Applies 'warning' message styles. Mutually exclusive with the `error` and `valid` props */
    warning?: boolean
}

export const NoticeBox = ({
    className,
    children,
    dataTest = 'dhis2-uicore-noticebox',
    title,
    warning,
    error,
    valid,
}: NoticeBoxProps) => {
    const classnames = cx(className, 'root', { warning, error, valid })

    return (
        <div className={classnames} data-test={dataTest}>
            <NoticeBoxIcon
                error={error}
                warning={warning}
                valid={valid}
                dataTest={`${dataTest}-icon`}
            />
            <div>
                <NoticeBoxContent
                    title={title}
                    dataTest={`${dataTest}-content`}
                >
                    {children}
                </NoticeBoxContent>
            </div>

            <style jsx>{`
                .root {
                    background: ${colors.blue050};
                    border: 1px solid ${colors.blue200};
                    border-radius: 3px;
                    display: flex;
                    padding-block: ${spacers.dp12};
                    padding-inline: ${spacers.dp16};
                }

                .root.warning {
                    background: ${colors.yellow050};
                    border: 1px solid ${colors.yellow200};
                }

                .root.error {
                    background: ${colors.red050};
                    border: 2px solid ${colors.red500};
                }

                .root.valid {
                    background: ${colors.green050};
                    border: 1px solid ${colors.green200};
                }
            `}</style>
        </div>
    )
}

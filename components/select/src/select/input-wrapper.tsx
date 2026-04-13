import { colors, theme } from '@dhis2/ui-constants'
import { IconChevronDown16 } from '@dhis2/ui-icons'
import cx from 'classnames'
import React from 'react'

export interface InputWrapperProps {
    dataTest: string
    inputRef: React.RefObject<HTMLDivElement>
    onToggle: (e: React.MouseEvent<HTMLDivElement>) => void
    children?: React.ReactElement
    className?: string
    dense?: boolean
    disabled?: boolean
    error?: boolean
    tabIndex?: string
    valid?: boolean
    warning?: boolean
}

const InputWrapper = ({
    dataTest,
    onToggle,
    children,
    tabIndex = '0',
    error,
    warning,
    valid,
    disabled,
    dense,
    className,
    inputRef,
}: InputWrapperProps) => {
    const classNames = cx(className, 'root', {
        error,
        warning,
        valid,
        disabled,
        dense,
    })

    return (
        <div
            className={classNames}
            onClick={onToggle}
            tabIndex={tabIndex as unknown as number}
            ref={inputRef}
            data-test={dataTest}
        >
            <div className="root-children">{children}</div>
            <div className="root-right">
                <IconChevronDown16 />
            </div>

            <style jsx>{`
                .root {
                    align-items: center;
                    background-color: white;
                    border-radius: 3px;
                    border: 1px solid ${colors.grey500};
                    box-sizing: border-box;
                    display: flex;
                    min-height: 40px;
                    padding-block: 6px;
                    padding-inline: 12px 6px;
                    box-shadow: inset 0 0 1px 0 rgba(48, 54, 60, 0.1);
                }

                .root:not(.disabled):focus,
                .root:not(.disabled):active {
                    outline: none;
                    box-shadow: inset 0 0 0 2px ${theme.focus};
                    border-color: ${theme.focus};
                }

                .root.valid {
                    border-color: ${theme.valid};
                }

                .root.warning {
                    border-color: ${theme.warning};
                }

                .root.error {
                    border-color: ${theme.error};
                }

                .root.disabled {
                    background-color: ${colors.grey100};
                    border-color: ${colors.grey500};
                    color: ${theme.disabled};
                    cursor: not-allowed;
                }

                .root.dense {
                    padding-block: 2px;
                    padding-inline: 8px 4px;
                    min-height: 32px;
                }

                .root-children {
                    flex-grow: 1;
                }

                .root-right {
                    margin-block-start: 4px;
                    margin-inline-start: 2px;
                }
            `}</style>
        </div>
    )
}

export { InputWrapper }

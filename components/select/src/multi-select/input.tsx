import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import React from 'react'
import {
    InputClearButton,
    InputPlaceholder,
    InputPrefix,
} from '../select/index.ts'
import { SelectionList } from './selection-list.tsx'

export interface MultiSelectInputProps {
    dataTest: string
    className?: string
    clearText?: string
    clearable?: boolean
    disabled?: boolean
    inputMaxHeight?: string
    options?: React.ReactNode
    placeholder?: string
    prefix?: string
    selected?: string[]
    onChange?: (data: { selected: string[] }, e: React.SyntheticEvent) => void
}

const Input = ({
    selected,
    onChange,
    clearable,
    clearText,
    placeholder,
    dataTest,
    prefix,
    options,
    className,
    disabled,
    inputMaxHeight = '100px',
}: MultiSelectInputProps) => {
    const hasSelection = (selected || []).length > 0
    const onClear = (e: React.MouseEvent<HTMLButtonElement>) => {
        const data = { selected: [] as string[] }

        e.stopPropagation()
        onChange?.(data, e)
    }

    return (
        <div className={cx('root', className)}>
            <InputPrefix prefix={prefix} dataTest={`${dataTest}-prefix`} />
            {!hasSelection && !prefix && (
                <InputPlaceholder
                    placeholder={placeholder}
                    dataTest={`${dataTest}-placeholder`}
                />
            )}
            {hasSelection && (
                <div className="root-input">
                    {/* the wrapper div above is necessary to enforce wrapping on overflow */}
                    <SelectionList
                        selected={selected}
                        onChange={onChange}
                        options={options}
                        disabled={disabled}
                    />
                </div>
            )}
            {hasSelection && clearable && !disabled && (
                <div className="root-right">
                    <InputClearButton
                        onClear={onClear}
                        clearText={clearText || ''}
                        dataTest={`${dataTest}-clear`}
                    />
                </div>
            )}

            <style jsx>{`
                .root {
                    display: flex;
                    align-items: center;
                    color: ${colors.grey900};
                    font-size: 14px;
                    line-height: 16px;
                }

                .root-input {
                    overflow-y: auto;
                    flex: 1;
                    display: flex;
                    flex-flow: wrap;
                    gap: 4px;
                }

                .root-right {
                    margin-inline-start: auto;
                }
            `}</style>

            <style jsx>{`
                .root-input {
                    max-height: ${inputMaxHeight};
                }
            `}</style>
        </div>
    )
}

export { Input }

import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import React from 'react'
import i18n from '../locales/index.js'
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
    collapseSelectionAfter?: number
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
    collapseSelectionAfter,
}: MultiSelectInputProps) => {
    const actualSelected = selected || []
    const hasSelection = actualSelected.length > 0
    const shouldCollapse =
        hasSelection &&
        typeof collapseSelectionAfter === 'number' &&
        actualSelected.length > collapseSelectionAfter
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
            {hasSelection && shouldCollapse && (
                <span
                    className="collapsed-selection-text"
                    data-test={`${dataTest}-selection-count`}
                >
                    {i18n.t('{{count}} selected', {
                        count: actualSelected.length,
                    })}
                </span>
            )}
            {hasSelection && !shouldCollapse && (
                <div className="root-input">
                    {/* the wrapper div above is necessary to enforce wrapping on overflow */}
                    <SelectionList
                        selected={actualSelected}
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

                .collapsed-selection-text {
                    flex: 1;
                    user-select: none;
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

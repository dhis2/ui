import React, { forwardRef, useEffect } from 'react'
import { isOptionHidden } from '../is-option-hidden.ts'
import { OptionType } from '../shared-prop-types.ts'
import { Option } from './option.tsx'

export interface OptionsListProps {
    comboBoxId: string
    focussedOptionIndex: number
    id: string
    options: OptionType[]
    onChange: (option: { value: string; label: string }) => void
    dataTest?: string
    disabled?: boolean
    labelledBy?: string
    loading?: boolean
    optionComponent?: React.ElementType
    optionUpdateStrategy?: 'off' | 'polite' | 'assertive'
    selectedValue?: string
    onBlur?: (e: React.FocusEvent) => void
    onEndReached?: () => void
}

export const OptionsList = forwardRef<HTMLDivElement, OptionsListProps>(
    function OptionsList(
        {
            comboBoxId,
            optionComponent,
            focussedOptionIndex,
            id,
            labelledBy,
            optionUpdateStrategy,
            options,
            selectedValue,
            dataTest,
            disabled,
            loading,
            onChange,
            onBlur,
            onEndReached,
        },
        ref
    ) {
        // scrolls the highlighted option into view when:
        // * the highlighted option changes
        // * the menu opens
        useEffect(() => {
            const listBox = (ref as React.RefObject<HTMLDivElement>).current
            if (!listBox) {
                return
            }
            const highlightedOption = listBox.childNodes[
                focussedOptionIndex
            ] as HTMLElement

            if (highlightedOption) {
                const listBoxParent = listBox.parentNode as HTMLElement
                const optionHidden = isOptionHidden(
                    highlightedOption,
                    listBoxParent
                )

                if (optionHidden) {
                    highlightedOption.scrollIntoView()
                }
            }
        }, [focussedOptionIndex, ref])

        return (
            <div
                ref={ref}
                role="listbox"
                id={id}
                aria-labelledby={labelledBy}
                aria-live={optionUpdateStrategy}
                aria-busy={loading ? true : undefined}
                data-test={dataTest}
                onBlur={onBlur}
            >
                {options.map(
                    (
                        {
                            value,
                            label,
                            component,
                            disabled: optionDisabled = false,
                        },
                        index
                    ) => {
                        const isSelected = value === selectedValue
                        const isLast = index === options.length - 1

                        return (
                            <Option
                                listBoxRef={ref as React.RefObject<HTMLElement>}
                                dataTest={`${dataTest}-option`}
                                highlighted={focussedOptionIndex === index}
                                key={value}
                                value={value}
                                label={label}
                                index={index}
                                comboBoxId={comboBoxId}
                                disabled={disabled || optionDisabled}
                                onClick={
                                    isSelected ? () => undefined : onChange
                                }
                                component={component || optionComponent}
                                onBecameVisible={
                                    isLast ? onEndReached : undefined
                                }
                            />
                        )
                    }
                )}
            </div>
        )
    }
)

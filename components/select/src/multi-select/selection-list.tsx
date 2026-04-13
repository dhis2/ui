import { Chip } from '@dhis2-ui/chip'
import React from 'react'
import { removeOption, findOptionChild } from '../select/index.ts'

const createRemoveHandler =
    ({
        selected,
        onChange,
        value,
    }: {
        selected: string[]
        onChange?: (
            data: { selected: string[] },
            e: React.SyntheticEvent
        ) => void
        value: string
    }) =>
    (_: Record<string, never>, e: React.SyntheticEvent) => {
        const filtered = removeOption(value, selected)
        const data = { selected: filtered }

        onChange?.(data, e)
    }

export interface SelectionListProps {
    disabled?: boolean
    options?: React.ReactNode
    selected?: string[]
    onChange?: (data: { selected: string[] }, e: React.SyntheticEvent) => void
}

const SelectionList = ({
    selected,
    onChange,
    disabled,
    options,
}: SelectionListProps) => (
    <React.Fragment>
        {(selected || []).map((value) => {
            const isProduction = process.env.NODE_ENV === 'production'
            const selectedOption = findOptionChild(value, options)

            if (!selectedOption) {
                const message =
                    `There is no option with the value: "${value}". ` +
                    'Make sure that all the values passed to the selected ' +
                    'prop match the value of an existing option.'

                if (isProduction) {
                    // Don't crash the app if in production
                    console.error(message)
                } else {
                    // Throw error if not in production for maximum visibility
                    throw new Error(message)
                }
            }

            const isDisabled = selectedOption
                ? // The chip should be disabled if the option or the select are disabled
                  selectedOption.props.disabled || disabled
                : // If there is no selected option, just look at the select
                  disabled
            // Use the selected value if we do not have a label
            const label = selectedOption ? selectedOption.props.label : value

            // Create an onRemove handler, but only if it's not disabled
            const onRemove = isDisabled
                ? undefined
                : createRemoveHandler({
                      selected: selected || [],
                      onChange,
                      value,
                  })

            return (
                <Chip
                    key={value}
                    onRemove={onRemove}
                    disabled={isDisabled}
                    marginBottom={0}
                    marginLeft={0}
                    marginTop={0}
                    marginRight={0}
                    overflow
                    dense
                >
                    {label}
                </Chip>
            )
        })}
    </React.Fragment>
)

export { SelectionList }

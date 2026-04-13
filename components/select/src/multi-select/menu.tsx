import React from 'react'
import {
    Empty,
    filterIgnored,
    checkIfValidOption,
    removeOption,
    findOption,
} from '../select/index.ts'

const onDisabledClick = (_: Record<string, never>, e: React.SyntheticEvent) => {
    e.stopPropagation()
    e.preventDefault()
}

const createHandler =
    ({
        isActive,
        onChange,
        selected,
        value,
    }: {
        isActive: boolean
        onChange?: (
            data: { selected: string[] },
            e: React.SyntheticEvent
        ) => void
        selected: string[]
        value: string
    }) =>
    (_: Record<string, never>, e: React.SyntheticEvent) => {
        e.stopPropagation()

        // If the option is currently selected remove it from the array of selected options
        if (isActive) {
            const filtered = removeOption(value, selected)
            const data = { selected: filtered }

            return onChange?.(data, e)
        }

        // Otherwise, add it to selected
        const data = {
            selected: selected.concat([value]),
        }
        return onChange?.(data, e)
    }

export interface MultiSelectMenuProps {
    dataTest: string
    empty?: React.ReactNode
    options?: React.ReactNode
    selected?: string[]
    onChange?: (data: { selected: string[] }, e: React.SyntheticEvent) => void
}

const Menu = ({
    options,
    onChange,
    selected,
    empty = '',
    dataTest,
}: MultiSelectMenuProps) => {
    const renderedOptions = filterIgnored(options)

    if (React.Children.count(renderedOptions) === 0) {
        // If it's a string, supply it to our <Empty> component so it looks better
        if (typeof empty === 'string') {
            return <Empty message={empty} dataTest={`${dataTest}-empty`} />
        }

        // Otherwise just render the supplied markup
        return empty
    }

    const children = React.Children.map(options, (child) => {
        const isValidOption = checkIfValidOption(child)

        // Return early if the child isn't an option, to prevent attaching handlers etc.
        if (!isValidOption) {
            return child
        }

        const {
            value,
            label,
            disabled: isDisabled,
        } = (child as React.ReactElement).props

        // Active means the option is currently selected
        const isActive = !!findOption(value, selected || [])

        // Create the appropriate click handler for the option
        const onClick = isDisabled
            ? onDisabledClick
            : createHandler({
                  isActive,
                  onChange,
                  selected: selected || [],
                  value,
                  label,
              } as {
                  isActive: boolean
                  onChange?: (
                      data: { selected: string[] },
                      e: React.SyntheticEvent
                  ) => void
                  selected: string[]
                  value: string
              })

        return React.cloneElement(child as React.ReactElement, {
            ...(child as React.ReactElement).props,
            onClick,
            active: isActive,
        })
    })

    return <React.Fragment>{children}</React.Fragment>
}

export { Menu }

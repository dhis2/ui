import React from 'react'

// Check whether an option is valid
export const checkIfValidOption = (option: React.ReactNode): boolean =>
    option !== null &&
    option !== undefined &&
    typeof option === 'object' &&
    'props' in option &&
    'value' in (option as React.ReactElement).props &&
    'label' in (option as React.ReactElement).props

// Filters all children that won't be rendered from an array of react children
export const filterIgnored = (children: React.ReactNode): React.ReactNode[] =>
    React.Children.toArray(children).filter(
        (child) => child !== null && child !== undefined
    )

// Find an option in an array of react children
export const findOptionChild = (
    value: string,
    optionChildren: React.ReactNode
): React.ReactElement | undefined =>
    React.Children.toArray(optionChildren).find((currentOption) => {
        if (
            !currentOption ||
            typeof currentOption !== 'object' ||
            !('props' in currentOption)
        ) {
            return false
        }

        return value === (currentOption as React.ReactElement).props.value
    }) as React.ReactElement | undefined

// Find an option in an array of option objects
export const findOption = (
    value: string,
    optionArray: string[]
): string | undefined =>
    optionArray.find((optionValue) => value === optionValue)

// Remove a specific option from an array of options
export const removeOption = (
    value: string,
    optionArray: string[]
): string[] =>
    optionArray.filter((optionValue) => {
        return optionValue !== value
    })

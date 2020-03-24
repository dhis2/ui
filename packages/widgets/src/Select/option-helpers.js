import React from 'react'

// Check whether an option is valid
export const checkIfValidOption = option =>
    option &&
    'props' in option &&
    'value' in option.props &&
    'label' in option.props

// Filters all children that won't be rendered from an array of react children
export const filterIgnored = children =>
    React.Children.toArray(children).filter(
        child => child !== null && child !== false && child !== undefined
    )

// Find an option in an array of react children
export const findOptionChild = (targetOption, optionChildren) =>
    React.Children.toArray(optionChildren).find(currentOption => {
        if (!currentOption.props) {
            return false
        }

        const matchesLabel = targetOption.label === currentOption.props.label
        const matchesValue = targetOption.value === currentOption.props.value

        return matchesLabel && matchesValue
    })

// Find an option in an array of option objects
export const findOption = (targetOption, optionArray) =>
    optionArray.find(currentOption => {
        const matchesLabel = targetOption.label === currentOption.label
        const matchesValue = targetOption.value === currentOption.value

        return matchesLabel && matchesValue
    })

// Remove a specific option from an array of options
export const removeOption = (targetOption, optionArray) =>
    optionArray.filter(currentOption => {
        const matchesLabel = targetOption.label === currentOption.label
        const matchesValue = targetOption.value === currentOption.value

        return !matchesLabel && !matchesValue
    })

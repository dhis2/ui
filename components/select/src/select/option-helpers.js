import React from 'react'

// Check whether an option is valid
export const checkIfValidOption = (option) =>
    option &&
    'props' in option &&
    'value' in option.props &&
    'label' in option.props

// Filters all children that won't be rendered from an array of react children
export const filterIgnored = (children) =>
    React.Children.toArray(children).filter(
        (child) => child !== null && child !== false && child !== undefined
    )

// Find an option in an array of react children
export const findOptionChild = (value, optionChildren) =>
    React.Children.toArray(optionChildren).find((currentOption) => {
        if (!currentOption.props) {
            return false
        }

        return value === currentOption.props.value
    })

// Find an option in an array of option objects
export const findOption = (value, optionArray) =>
    optionArray.find((optionValue) => value === optionValue)

// Remove a specific option from an array of options
export const removeOption = (value, optionArray) =>
    optionArray.filter((optionValue) => {
        return optionValue !== value
    })

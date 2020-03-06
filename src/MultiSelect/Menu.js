import React from 'react'
import propTypes from '@dhis2/prop-types'
import { multiSelectedPropType } from '../common-prop-types.js'
import { Empty } from '../Select/Empty.js'
import {
    filterIgnored,
    checkIfValidOption,
    removeOption,
    findOption,
} from '../Select/option-helpers.js'

const onDisabledClick = (_, e) => {
    e.stopPropagation()
    e.preventDefault()
}

const createHandler = ({ isActive, onChange, selected, value, label }) => (
    _,
    e
) => {
    const clickedOption = { value, label }
    e.stopPropagation()
    e.preventDefault()

    // If the option is currently selected remove it from the array of selected options
    if (isActive) {
        const filtered = removeOption(clickedOption, selected)
        const data = { selected: filtered }

        return onChange(data, e)
    }

    // Otherwise, add it to selected
    const data = {
        selected: selected.concat([clickedOption]),
    }
    return onChange(data, e)
}

const Menu = ({ options, onChange, selected, empty, dataTest }) => {
    const renderedOptions = filterIgnored(options)

    if (React.Children.count(renderedOptions) === 0) {
        // If it's a string, supply it to our <Empty> component so it looks better
        if (typeof empty === 'string') {
            return <Empty message={empty} dataTest={`${dataTest}-empty`} />
        }

        // Otherwise just render the supplied markup
        return empty
    }

    const children = React.Children.map(options, child => {
        const isValidOption = checkIfValidOption(child)

        // Return early if the child isn't an option, to prevent attaching handlers etc.
        if (!isValidOption) {
            return child
        }

        const { value, label, disabled: isDisabled } = child.props

        // Active means the option is currently selected
        const isActive = !!findOption({ value, label }, selected)

        // Create the appropriate click handler for the option
        const onClick = isDisabled
            ? onDisabledClick
            : createHandler({
                  isActive,
                  onChange,
                  selected,
                  value,
                  label,
              })

        return React.cloneElement(child, {
            ...child.props,
            onClick,
            active: isActive,
        })
    })

    return <React.Fragment>{children}</React.Fragment>
}

Menu.defaultProps = {
    empty: '',
}

Menu.propTypes = {
    dataTest: propTypes.string.isRequired,
    empty: propTypes.node,
    options: propTypes.node,
    selected: multiSelectedPropType,
    onChange: propTypes.func,
}

export { Menu }

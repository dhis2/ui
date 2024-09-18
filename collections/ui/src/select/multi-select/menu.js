import PropTypes from 'prop-types'
import React from 'react'
import {
    Empty,
    filterIgnored,
    checkIfValidOption,
    removeOption,
    findOption,
} from '../select/index.js'

const onDisabledClick = (_, e) => {
    e.stopPropagation()
    e.preventDefault()
}

const createHandler =
    ({ isActive, onChange, selected, value }) =>
    (_, e) => {
        e.stopPropagation()

        // If the option is currently selected remove it from the array of selected options
        if (isActive) {
            const filtered = removeOption(value, selected)
            const data = { selected: filtered }

            return onChange(data, e)
        }

        // Otherwise, add it to selected
        const data = {
            selected: selected.concat([value]),
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

    const children = React.Children.map(options, (child) => {
        const isValidOption = checkIfValidOption(child)

        // Return early if the child isn't an option, to prevent attaching handlers etc.
        if (!isValidOption) {
            return child
        }

        const { value, label, disabled: isDisabled } = child.props

        // Active means the option is currently selected
        const isActive = !!findOption(value, selected)

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
    dataTest: PropTypes.string.isRequired,
    empty: PropTypes.node,
    options: PropTypes.node,
    selected: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func,
}

export { Menu }

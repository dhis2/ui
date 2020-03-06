import React from 'react'
import propTypes from '@dhis2/prop-types'
import { singleSelectedPropType } from '../common-prop-types.js'
import { Empty } from '../Select/Empty.js'
import { filterIgnored, checkIfValidOption } from '../Select/option-helpers.js'

const onIgnoredClick = (_, e) => {
    e.stopPropagation()
    e.preventDefault()
}

const Menu = ({
    options,
    onChange,
    selected,
    empty,
    handleFocusInput,
    handleClose,
    dataTest,
}) => {
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
        const isActive = value === selected.value && label === selected.label
        const onClick = (_, e) => {
            const data = { selected: { value, label } }
            e.stopPropagation()

            onChange(data, e)
            handleClose()
            handleFocusInput()
        }

        // Clicks on active options or disabled options should be ignored for the single select
        const isIgnored = isActive || isDisabled

        return React.cloneElement(child, {
            ...child.props,
            onClick: isIgnored ? onIgnoredClick : onClick,
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
    handleClose: propTypes.func,
    handleFocusInput: propTypes.func,
    options: propTypes.node,
    selected: singleSelectedPropType,
    onChange: propTypes.func,
}

export { Menu }

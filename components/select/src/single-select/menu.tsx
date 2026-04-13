import React from 'react'
import { Empty, filterIgnored, checkIfValidOption } from '../select/index.ts'

const onIgnoredClick = (_: Record<string, never>, e: React.SyntheticEvent) => {
    e.stopPropagation()
    e.preventDefault()
}

export interface SingleSelectMenuProps {
    dataTest: string
    empty?: React.ReactNode
    handleClose?: () => void
    handleFocusInput?: () => void
    options?: React.ReactNode
    selected?: string
    onChange?: (data: { selected: string }, e: React.SyntheticEvent) => void
}

const Menu = ({
    options,
    onChange,
    selected,
    empty = '',
    handleFocusInput,
    handleClose,
    dataTest,
}: SingleSelectMenuProps) => {
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

        const { value, disabled: isDisabled } = (child as React.ReactElement).props

        // Active means the option is currently selected
        const isActive = value === selected
        const onClick = (_: Record<string, never>, e: React.SyntheticEvent) => {
            const data = { selected: value as string }
            e.stopPropagation()

            onChange?.(data, e)
            handleClose?.()
            handleFocusInput?.()
        }

        // Clicks on active options or disabled options should be ignored for the single select
        const isIgnored = isActive || isDisabled

        return React.cloneElement(child as React.ReactElement, {
            ...(child as React.ReactElement).props,
            onClick: isIgnored ? onIgnoredClick : onClick,
            active: isActive,
        })
    })

    return <React.Fragment>{children}</React.Fragment>
}

export { Menu }

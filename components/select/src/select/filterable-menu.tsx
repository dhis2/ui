import React, { Component } from 'react'
import { FilterInput } from './filter-input.tsx'
import { NoMatch } from './no-match.tsx'
import { filterIgnored, checkIfValidOption } from './option-helpers.ts'

export interface FilterableMenuProps {
    Menu: React.ElementType
    dataTest: string
    noMatchText: string
    selected: string | string[]
    empty?: React.ReactNode
    handleClose?: () => void
    handleFocusInput?: () => void
    options?: React.ReactNode
    placeholder?: string
    onChange?: (
        data: { selected: string | string[] },
        e: React.SyntheticEvent
    ) => void
}

interface FilterableMenuState {
    filter: string
}

export class FilterableMenu extends Component<
    FilterableMenuProps,
    FilterableMenuState
> {
    state: FilterableMenuState = {
        filter: '',
    }

    onFilterChange = ({ value }: { value: string }) => {
        this.setState({ filter: value })
    }

    render() {
        const {
            dataTest,
            options,
            onChange,
            selected,
            empty,
            handleClose,
            handleFocusInput,
            placeholder,
            noMatchText,
            Menu,
        } = this.props
        const { filter } = this.state
        const menuProps = {
            onChange,
            selected,
            empty,
            handleClose,
            handleFocusInput,
            dataTest,
        }

        const renderedOptions = filterIgnored(options)

        // If there are no options or there's no filter, just pass everything through
        if (React.Children.count(renderedOptions) === 0 || !filter) {
            return (
                <React.Fragment>
                    <FilterInput
                        dataTest={`${dataTest}-filterinput`}
                        placeholder={placeholder}
                        value={filter}
                        onChange={this.onFilterChange}
                    />
                    <Menu {...menuProps} options={options} />
                </React.Fragment>
            )
        }

        const filtered = React.Children.map(options, (child) => {
            const isValidOption = checkIfValidOption(child)

            // Filter it out if it's an invalid option
            if (!isValidOption) {
                return null
            }

            const { label } = (child as React.ReactElement).props

            // Filter by label, because that's the part of an option that's displayed to the user
            const match = label.toLowerCase().includes(filter.toLowerCase())

            return match ? child : null
        })

        const hasMatch = React.Children.count(filtered) > 0

        return (
            <React.Fragment>
                <FilterInput
                    dataTest={`${dataTest}-filterinput`}
                    placeholder={placeholder}
                    value={filter}
                    onChange={this.onFilterChange}
                />
                {hasMatch ? (
                    <Menu {...menuProps} options={filtered} />
                ) : (
                    <NoMatch message={noMatchText} />
                )}
            </React.Fragment>
        )
    }
}

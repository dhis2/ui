import propTypes from '@dhis2/prop-types'
import React, { Component } from 'react'
import { FilterInput } from '../Select/FilterInput.js'
import { NoMatch } from '../Select/NoMatch.js'
import { filterIgnored, checkIfValidOption } from '../Select/option-helpers.js'

export class FilterableMenu extends Component {
    state = {
        filter: '',
    }

    onFilterChange = ({ value }) => {
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

        const filtered = React.Children.map(options, child => {
            const isValidOption = checkIfValidOption(child)

            // Filter it out if it's an invalid option
            if (!isValidOption) {
                return null
            }

            const { label } = child.props

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

FilterableMenu.propTypes = {
    Menu: propTypes.elementType.isRequired,
    dataTest: propTypes.string.isRequired,
    noMatchText: propTypes.string.isRequired,
    selected: propTypes.oneOfType([
        propTypes.string,
        propTypes.arrayOf(propTypes.string),
    ]).isRequired,
    empty: propTypes.node,
    handleClose: propTypes.func,
    handleFocusInput: propTypes.func,
    options: propTypes.node,
    placeholder: propTypes.string,
    onChange: propTypes.func,
}

import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { FilterInput } from './filter-input.js'
import { NoMatch } from './no-match.js'
import { filterIgnored, checkIfValidOption } from './option-helpers.js'

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

        const filtered = React.Children.map(options, (child) => {
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
    Menu: PropTypes.elementType.isRequired,
    dataTest: PropTypes.string.isRequired,
    noMatchText: PropTypes.string.isRequired,
    selected: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
    empty: PropTypes.node,
    handleClose: PropTypes.func,
    handleFocusInput: PropTypes.func,
    options: PropTypes.node,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
}

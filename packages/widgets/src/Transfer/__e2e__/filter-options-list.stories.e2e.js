import React from 'react'
import { Transfer } from '../../index.js'
import { options } from './common/options'
import { statefulDecorator } from './common/statefulDecorator'

export default {
    title: 'Transfer filtering',
    decorators: [statefulDecorator()],
}

export const EmptyResult = (_, { selected, onChange }) => (
    <Transfer
        filterable
        initialSearchTerm="Foobarbaz"
        selected={selected}
        onChange={onChange}
        sourceEmptyPlaceholder={<span data-test="no-results">No results</span>}
        options={options}
    />
)

export const SomeResults = (_, { selected, onChange }) => (
    <Transfer
        selected={selected}
        filterable
        initialSearchTerm="ANC"
        onChange={onChange}
        options={options}
    />
)

export const UppercaseSearch = (_, { selected, onChange }) => (
    <Transfer
        selected={selected}
        filterable
        initialSearchTerm="ANC"
        onChange={onChange}
        options={options}
    />
)

export const LowercaseSearch = (_, { selected, onChange }) => (
    <Transfer
        filterable
        initialSearchTerm="anc"
        selected={selected}
        onChange={onChange}
        options={options}
    />
)

export const AncCustomFilter = (_, { selected, onChange }) => (
    <Transfer
        filterable
        selected={selected}
        onChange={onChange}
        filterCallback={(options, filter) =>
            options.filter(({ label }) => label.match(`(^| )ANC .*${filter}`))
        }
        options={options}
    />
)

window.customFilterCallback = (options, filter) => {
    return options.filter(({ label }) => label.indexOf(filter) !== -1)
}

window.Cypress && window.Cypress.cy.spy(window, 'customFilterCallback')

export const ControlledFilter = (
    _,
    { filter, onChange, onFilterChange, selected }
) => (
    <Transfer
        selected={selected}
        onChange={onChange}
        filterable
        filterCallback={window.customFilterCallback}
        searchTerm={filter}
        onFilterChange={onFilterChange}
        options={options}
    />
)

ControlledFilter.story = {
    decorators: [statefulDecorator()],
}

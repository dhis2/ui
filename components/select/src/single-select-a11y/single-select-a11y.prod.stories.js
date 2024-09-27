import { sharedPropTypes } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React, { useMemo, useState } from 'react'
import { SingleSelectA11y } from './single-select-a11y.js'

export default {
    title: 'Single Select A11y',
    component: SingleSelectA11y,
}

const options = [
    { value: '', label: '<Empty>'},
    { value: 'foo', label: 'Foo'},
    { value: 'bar', label: 'Bar'},
    { value: 'baz', label: 'Baz'},
]

export const WithOptions = () => {
    const [value, setValue] = useState('')
    const [filterValue, setFilterValue] = useState('')
    const filteredOptions = useMemo(() => {
        return filterValue
            ? options.filter(({ label, value }) => (
                label.match(new RegExp(filterValue), 'i')
                && value !== ''
            ))
            : options
    }, [filterValue])

    return (
        <SingleSelectA11y
            value={value}
            valueLabel={value ? options.find(option => option.value === value).label : ''}
            onChange={nextValue => setValue(nextValue)}

            filterable
            filterPlaceholder="Filter placeholder"
            filterValue={filterValue}
            onFilterChange={setFilterValue}
            noMatchText="No results for your filter"

            idPrefix="a11y"
            options={filteredOptions}
        />
    )
}

import React, { useMemo, useState } from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'
import { options } from './options.js'

export const WithFilterField = () => {
    const [value, setValue] = useState('')
    const [filterValue, setFilterValue] = useState('')
    const filteredOptions = useMemo(() => {
        return filterValue
            ? options.filter(
                  ({ label, value }) =>
                      label.match(new RegExp(filterValue), 'i') && value !== ''
              )
            : options
    }, [filterValue])

    const valueLabel = value
        ? options.find((option) => option.value === value).label
        : ''

    return (
        <SingleSelectA11y
            idPrefix="a11y"
            value={value}
            valueLabel={valueLabel}
            onChange={(nextValue) => setValue(nextValue)}
            filterable
            filterPlaceholder="Filter placeholder"
            filterValue={filterValue}
            onFilterChange={setFilterValue}
            noMatchText="No results for your filter"
            options={filteredOptions}
        />
    )
}

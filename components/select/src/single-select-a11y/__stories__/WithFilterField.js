import React, { useMemo, useState } from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'
import { options } from './options.js'

export const WithFilterField = () => {
    const [selected, setSelected] = useState(null)
    const [filterValue, setFilterValue] = useState('')
    const filteredOptions = useMemo(() => {
        return filterValue
            ? options.filter(
                  ({ label, value }) =>
                      label.match(new RegExp(filterValue), 'i') && value !== ''
              )
            : options
    }, [filterValue])

    return (
        <SingleSelectA11y
            name="a11y"
            selected={selected}
            onChange={setSelected}
            filterable
            filterPlaceholder="Filter placeholder"
            filterValue={filterValue}
            onFilterChange={setFilterValue}
            noMatchText="No results for your filter"
            options={filteredOptions}
        />
    )
}

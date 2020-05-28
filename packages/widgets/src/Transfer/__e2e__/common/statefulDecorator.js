import React, { useState } from 'react'

export const statefulDecorator = ({
    initialState = [],
    controlFilter = false,
    initialSearchTerm = '',
} = {}) => fn =>
    React.createElement(() => {
        const [selected, setSelected] = useState(initialState)
        const [searchTerm, setSearchTerm] = useState(initialSearchTerm)

        return fn({
            selected,
            searchTerm: controlFilter ? searchTerm : undefined,
            onChange: payload => setSelected(payload.selected),
            onFilterChange: controlFilter
                ? ({ value }) => setSearchTerm(value)
                : undefined,
        })
    })

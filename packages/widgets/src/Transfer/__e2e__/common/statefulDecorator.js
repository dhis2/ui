import React, { useState } from 'react'

const WithState = ({ fn, initialState, initialSearchTerm, controlFilter }) => {
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
}

export const statefulDecorator = ({
    initialState = [],
    controlFilter = false,
    initialSearchTerm = '',
} = {}) => fn => (
    <WithState
        initialState={initialState}
        initialSearchTerm={initialSearchTerm}
        controlFilter={controlFilter}
        fn={fn}
    />
)

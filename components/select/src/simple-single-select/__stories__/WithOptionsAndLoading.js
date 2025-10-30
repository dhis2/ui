import React, { useState } from 'react'
import { SimpleSingleSelect } from '../simple-single-select.js'

const options = [
    { label: 'None', value: '' },
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
]

export const WithOptionsAndLoading = () => {
    const [selected, setSelected] = useState(null)

    return (
        <SimpleSingleSelect
            loading
            name="simple"
            selected={selected}
            onChange={setSelected}
            options={options}
        />
    )
}

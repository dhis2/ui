import React, { useState } from 'react'
import { SimpleSingleSelect } from '../simple-single-select.js'

const options = [
    { value: '1', label: 'option one' },
    { value: '2', label: 'option two' },
    { value: '3', label: 'A much longer option label that gets clamped' },
]

export const WithMenuMaxWidth = () => {
    const [selected, setSelected] = useState(null)

    return (
        <div style={{ width: 120 }}>
            <SimpleSingleSelect
                name="simple"
                selected={selected}
                onChange={setSelected}
                options={options}
                menuMaxWidth="200px"
            />
        </div>
    )
}

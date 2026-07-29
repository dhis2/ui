import React, { useState } from 'react'
import { SimpleSingleSelect } from '../simple-single-select.js'

const options = [
    { value: '1', label: 'option one' },
    { value: '2', label: 'option two' },
    { value: '3', label: 'option three' },
    { value: '4', label: 'A longer option that exceeds the minimum' },
]

export const WithMenuMinWidth = () => {
    const [selected, setSelected] = useState(null)

    return (
        <div style={{ width: 120 }}>
            <SimpleSingleSelect
                name="simple"
                selected={selected}
                onChange={setSelected}
                options={options}
                menuMinWidth="240px"
            />
        </div>
    )
}

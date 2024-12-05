import React, { useState } from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'

const options = [
    { label: 'None', value: '' },
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
]

export const WithOptionsAndLoadingText = () => {
    const [selected, setSelected] = useState(null)

    return (
        <SingleSelectA11y
            loading
            menuLoadingText="Loading options"
            name="a11y"
            selected={selected}
            onChange={setSelected}
            options={options}
        />
    )
}

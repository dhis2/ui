import React, { useState } from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'

const options = [
    { label: 'None', value: '' },
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
]

export const WithOptionsAndLoadingText = () => {
    const [value, setValue] = useState('')

    return (
        <SingleSelectA11y
            loading
            menuLoadingText="Loading options"
            idPrefix="a11y"
            value={value}
            valueLabel={
                value
                    ? options.find((option) => option.value === value).label
                    : ''
            }
            onChange={(nextValue) => setValue(nextValue)}
            options={options}
        />
    )
}

import React, { useState } from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'
import { options } from './options.js'

export const WithPlaceholder = () => {
    const [value, setValue] = useState('')
    const withoutEmptyOptions = options.slice(1)

    return (
        <SingleSelectA11y
            placeholder="Placeholder text"
            idPrefix="a11y"
            value={value}
            valueLabel={
                value
                    ? options.find((option) => option.value === value).label
                    : ''
            }
            onChange={(nextValue) => setValue(nextValue)}
            options={withoutEmptyOptions}
        />
    )
}

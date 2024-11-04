import React, { useState } from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'
import { options } from './options.js'

export const Empty = () => {
    const [value, setValue] = useState('')

    return (
        <SingleSelectA11y
            idPrefix="a11y"
            value={value}
            valueLabel={
                value
                    ? options.find((option) => option.value === value).label
                    : ''
            }
            onChange={(nextValue) => setValue(nextValue)}
            options={[]}
        />
    )
}

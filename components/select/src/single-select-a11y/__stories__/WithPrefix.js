import React, { useState } from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'
import { fiveOptions } from './options.js'

export const WithPrefix = () => {
    const [value, setValue] = useState('')

    return (
        <SingleSelectA11y
            prefix="Prefix text"
            idPrefix="a11y"
            value={value}
            valueLabel={
                value
                    ? fiveOptions.find((option) => option.value === value).label
                    : ''
            }
            onChange={(nextValue) => setValue(nextValue)}
            options={fiveOptions}
        />
    )
}

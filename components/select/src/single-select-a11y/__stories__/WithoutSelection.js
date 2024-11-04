import React, { useState } from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'
import { fiveOptions } from './options.js'

export const WithoutSelection = () => {
    const [value, setValue] = useState('')

    return (
        <SingleSelectA11y
            idPrefix="a11y"
            value={value}
            onChange={(nextValue) => setValue(nextValue)}
            options={fiveOptions}
        />
    )
}

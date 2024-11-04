import React, { useState } from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'
import { options } from './options.js'

export const WithManyOptions = () => {
    const [value, setValue] = useState('art_entry_point:_no_pmtct')

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
            options={options}
        />
    )
}

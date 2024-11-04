import React, { useState } from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'
import { fiveOptions } from './options.js'

const fiveOptionsWithFourthDisabled = [
    ...fiveOptions.slice(0, 3),
    { ...fiveOptions[3], disabled: true },
    ...fiveOptions.slice(4),
]

export const WithDisabledOption = () => {
    const [value, setValue] = useState('anc_1st_visit')

    return (
        <SingleSelectA11y
            idPrefix="a11y"
            value={value}
            valueLabel={
                value
                    ? fiveOptions.find((option) => option.value === value).label
                    : ''
            }
            onChange={(nextValue) => setValue(nextValue)}
            options={fiveOptionsWithFourthDisabled}
        />
    )
}

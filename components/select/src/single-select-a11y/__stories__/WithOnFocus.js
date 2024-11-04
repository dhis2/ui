import React, { useState } from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'
import { fiveOptions } from './options.js'

export const WithOnFocus = () => {
    const [value, setValue] = useState('')
    const [focusTime, setFocusTime] = useState('')

    return (
        <>
            <SingleSelectA11y
                onFocus={() => setFocusTime(new Date().toISOString())}
                idPrefix="a11y"
                value={value}
                valueLabel={
                    value
                        ? fiveOptions.find((option) => option.value === value)
                              .label
                        : ''
                }
                onChange={(nextValue) => setValue(nextValue)}
                options={fiveOptions}
            />

            <p>Last time select received focus: {focusTime || 'never'}</p>
        </>
    )
}

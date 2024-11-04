import React, { useState } from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'
import { fiveOptions } from './options.js'

export const WithInitialFocus = () => {
    const [value, setValue] = useState('')

    return (
        <>
            <SingleSelectA11y
                autoFocus
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

            <select onChange={(e) => console.log(e)}>
                <option value="">None</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
                <option value="6">Six</option>
            </select>
        </>
    )
}

import React, { useState } from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'
import { fiveOptions } from './options.js'

export const WithOnBlur = () => {
    const [value, setValue] = useState('')
    const [blurTime, setBlurTime] = useState('')

    return (
        <>
            <SingleSelectA11y
                onBlur={() => setBlurTime(new Date().toISOString())}
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

            <p>Last time select received blur: {blurTime || 'never'}</p>
        </>
    )
}

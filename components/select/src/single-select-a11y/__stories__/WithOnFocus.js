import React, { useState } from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'
import { fiveOptions } from './options.js'

export const WithOnFocus = () => {
    const [selected, setSelected] = useState(null)
    const [focusTime, setFocusTime] = useState('')

    return (
        <>
            <SingleSelectA11y
                onFocus={() => setFocusTime(new Date().toISOString())}
                name="a11y"
                selected={selected}
                onChange={setSelected}
                options={fiveOptions}
            />

            <p>Last time select received focus: {focusTime || 'never'}</p>
        </>
    )
}

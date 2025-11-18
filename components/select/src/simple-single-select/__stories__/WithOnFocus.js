import React, { useState } from 'react'
import { SimpleSingleSelect } from '../simple-single-select.js'
import { fiveOptions } from './options.js'

export const WithOnFocus = () => {
    const [selected, setSelected] = useState(null)
    const [focusTime, setFocusTime] = useState('')

    return (
        <>
            <SimpleSingleSelect
                onFocus={() => setFocusTime(new Date().toISOString())}
                name="simple"
                selected={selected}
                onChange={setSelected}
                options={fiveOptions}
            />

            <p>Last time select received focus: {focusTime || 'never'}</p>
        </>
    )
}

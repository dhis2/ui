import React, { useState } from 'react'
import { SimpleSingleSelect } from '../simple-single-select.js'
import { fiveOptions as originalOptions } from './options.js'

// simulating when the first option value is not empty string
const fiveOptions = [
    { label: 'None', value: 'unknown' },
    ...originalOptions.slice(1),
]

export const WithMultipleSelectsAndScrollableParent = () => {
    const [selected, setSelected] = useState(null)
    const [selected2, setSelected2] = useState(null)

    return (
        <div style={{ overflow: 'scroll', height: '250px' }}>
            Selected value from first select: {JSON.stringify(selected)}
            <SimpleSingleSelect
                inputMaxHeight="50px"
                name="simple"
                selected={selected}
                onChange={setSelected}
                options={fiveOptions}
            />
            <br />
            Selected value from second select: {JSON.stringify(selected2)}
            <SimpleSingleSelect
                inputMaxHeight="50px"
                name="simple"
                selected={selected2}
                onChange={setSelected2}
                options={fiveOptions}
                clearable
                onClear={() => setSelected2(null)}
            />
            <br />
            <input type="text" placeholder="just another field" />
            <br />
            <br />
            <div>
                Some text to force a window with scrolling (to validate the
                KeyDown on the combo box does not scroll the whole window)
                <br />
                <br />
                Some more text..
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                Some text to force scrolling
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                Some text to force scrolling
            </div>
        </div>
    )
}

import React, { useState } from 'react'
import { SimpleSingleSelect } from '../simple-single-select.js'
import { fiveOptions } from './options.js'

export const WithInitialFocus = () => {
    const [selected, setSelected] = useState(null)

    return (
        <>
            <SimpleSingleSelect
                autoFocus
                name="simple"
                selected={selected}
                onChange={setSelected}
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

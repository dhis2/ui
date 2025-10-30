import React, { useState } from 'react'
import { SimpleSingleSelect } from '../simple-single-select.js'
import { options } from './options.js'

export const WithPlaceholder = () => {
    const [selected, setSelected] = useState(null)
    const withoutEmptyOptions = options.slice(1)

    return (
        <SimpleSingleSelect
            placeholder="Placeholder text"
            name="simple"
            selected={selected}
            onChange={setSelected}
            options={withoutEmptyOptions}
        />
    )
}

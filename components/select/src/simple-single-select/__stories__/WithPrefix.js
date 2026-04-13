import React, { useState } from 'react'
import { SimpleSingleSelect } from '../simple-single-select.tsx'
import { fiveOptions } from './options.js'

export const WithPrefix = () => {
    const [selected, setSelected] = useState(null)

    return (
        <SimpleSingleSelect
            prefix="Prefix text"
            name="simple"
            selected={selected}
            onChange={setSelected}
            options={fiveOptions}
        />
    )
}

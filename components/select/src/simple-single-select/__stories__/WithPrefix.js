import React, { useState } from 'react'
import { SimpleSingleSelect } from '../simple-single-select.js'
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

import React, { useState } from 'react'
import { SimpleSingleSelect } from '../simple-single-select.js'
import { fiveOptions } from './options.js'

export const Dense = () => {
    const [selected, setSelected] = useState(null)

    return (
        <SimpleSingleSelect
            dense
            name="simple"
            selected={selected}
            onChange={setSelected}
            options={fiveOptions}
        />
    )
}

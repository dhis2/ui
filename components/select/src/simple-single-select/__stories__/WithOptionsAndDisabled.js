import React, { useState } from 'react'
import { SimpleSingleSelect } from '../simple-single-select.js'
import { fiveOptions } from './options.js'

export const WithOptionsAndDisabled = () => {
    const [selected, setSelected] = useState(null)

    return (
        <SimpleSingleSelect
            disabled
            name="simple"
            selected={selected}
            onChange={setSelected}
            options={fiveOptions}
        />
    )
}

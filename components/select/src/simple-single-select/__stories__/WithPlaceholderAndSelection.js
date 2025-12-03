import React, { useState } from 'react'
import { SimpleSingleSelect } from '../simple-single-select.js'
import { fiveOptions } from './options.js'

export const WithPlaceholderAndSelection = () => {
    const [selected, setSelected] = useState({
        label: 'ANC 1st visit',
        value: 'anc_1st_visit',
    })

    return (
        <SimpleSingleSelect
            placeholder="Placeholder text"
            name="simple"
            selected={selected}
            onChange={setSelected}
            options={fiveOptions}
        />
    )
}

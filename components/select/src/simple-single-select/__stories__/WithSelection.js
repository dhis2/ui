import React, { useState } from 'react'
import { SimpleSingleSelect } from '../simple-single-select.js'
import { fiveOptions } from './options.js'

export const WithSelection = () => {
    const [selected, setSelected] = useState({
        label: 'ANC 1st visit',
        value: 'anc_1st_visit',
    })

    return (
        <SimpleSingleSelect
            name="simple"
            selected={selected}
            onChange={setSelected}
            options={fiveOptions}
        />
    )
}

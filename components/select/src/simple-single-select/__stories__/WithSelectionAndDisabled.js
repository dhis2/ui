import React, { useState } from 'react'
import { SimpleSingleSelect } from '../simple-single-select.tsx'
import { fiveOptions } from './options.js'

export const WithSelectionAndDisabled = () => {
    const [selected, setSelected] = useState({
        label: 'ANC 1st visit',
        value: 'anc_1st_visit',
    })

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

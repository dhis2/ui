import React, { useState } from 'react'
import { SimpleSingleSelect } from '../simple-single-select.js'
import { fiveOptions } from './options.js'

export const WithClearButton = () => {
    const [selected, setSelected] = useState({
        label: 'ANC 1st visit',
        value: 'anc_1st_visit',
    })

    return (
        <SimpleSingleSelect
            clearable
            name="simple"
            onClear={() => setSelected({
                label: '',
                value: '',
            })}
            selected={selected}
            setSelectedValue={setSelected}
            onChange={setSelected}
            options={fiveOptions}
        />
    )
}

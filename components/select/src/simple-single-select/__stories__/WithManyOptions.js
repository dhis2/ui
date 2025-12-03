import React, { useState } from 'react'
import { SimpleSingleSelect } from '../simple-single-select.js'
import { options } from './options.js'

export const WithManyOptions = () => {
    const [selected, setSelected] = useState({
        label: 'ART entry point: No PMTCT',
        value: 'art_entry_point:_no_pmtct',
    })

    return (
        <SimpleSingleSelect
            name="simple"
            selected={selected}
            onChange={setSelected}
            options={options}
        />
    )
}

import React, { useState } from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'
import { options } from './options.js'

export const WithManyOptions = () => {
    const [selected, setSelected] = useState({
        label: 'ART entry point: No PMTCT',
        value: 'art_entry_point:_no_pmtct',
    })

    return (
        <SingleSelectA11y
            name="a11y"
            selected={selected}
            onChange={setSelected}
            options={options}
        />
    )
}

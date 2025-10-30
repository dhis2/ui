import React, { useState } from 'react'
import { SimpleSingleSelect } from '../simple-single-select.js'
import { options } from './options.js'

export const WithCustomLowMaxHeight = () => {
    const [selected, setSelected] = useState(null)

    return (
        <SimpleSingleSelect
            name="simple"
            selected={selected}
            onChange={setSelected}
            options={options}
            menuMaxHeight="100px"
        />
    )
}

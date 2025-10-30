import React, { useState } from 'react'
import { SimpleSingleSelect } from '../simple-single-select.js'
import { fiveOptions } from './options.js'

export const WithoutSelection = () => {
    const [selected, setSelected] = useState(null)

    return (
        <SimpleSingleSelect
            inputMaxHeight="50px"
            name="simple"
            selected={selected}
            onChange={setSelected}
            options={fiveOptions}
        />
    )
}

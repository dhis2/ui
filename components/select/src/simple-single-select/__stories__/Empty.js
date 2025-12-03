import React, { useState } from 'react'
import { SimpleSingleSelect } from '../simple-single-select.js'

export const Empty = () => {
    const [selected, setSelected] = useState(null)

    return (
        <SimpleSingleSelect
            name="simple"
            selected={selected}
            onChange={setSelected}
            options={[]}
        />
    )
}

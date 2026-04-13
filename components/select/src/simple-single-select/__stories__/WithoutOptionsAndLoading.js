import React, { useState } from 'react'
import { SimpleSingleSelect } from '../simple-single-select.tsx'

export const WithoutOptionsAndLoading = () => {
    const [selected, setSelected] = useState(null)

    return (
        <SimpleSingleSelect
            loading
            name="simple"
            selected={selected}
            onChange={setSelected}
            options={[]}
        />
    )
}

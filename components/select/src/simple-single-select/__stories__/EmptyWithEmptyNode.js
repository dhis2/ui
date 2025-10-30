import React, { useState } from 'react'
import { SimpleSingleSelect } from '../simple-single-select.js'

export const EmptyWithEmptyNode = () => {
    const [selected, setSelected] = useState(null)
    const emptyNode = (
        <div
            style={{
                color: 'red',
                textAlign: 'center',
                padding: '10px 0',
            }}
        >
            Custom empty text
        </div>
    )

    return (
        <SimpleSingleSelect
            name="simple"
            selected={selected}
            onChange={setSelected}
            options={[]}
            empty={emptyNode}
        />
    )
}

import React, { useState } from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'

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
        <SingleSelectA11y
            name="a11y"
            selected={selected}
            onChange={setSelected}
            options={[]}
            empty={emptyNode}
        />
    )
}

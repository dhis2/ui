import React, { useState } from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'

export const EmptyWithEmptyText = () => {
    const [selected, setSelected] = useState(null)

    return (
        <SingleSelectA11y
            name="a11y"
            selected={selected}
            onChange={setSelected}
            options={[]}
            empty="Custom empty text"
        />
    )
}

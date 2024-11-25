import React, { useState } from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'

export const Empty = () => {
    const [selected, setSelected] = useState(null)

    return (
        <SingleSelectA11y
            name="a11y"
            selected={selected}
            onChange={setSelected}
            options={[]}
        />
    )
}

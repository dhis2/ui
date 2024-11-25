import React, { useState } from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'
import { fiveOptions } from './options.js'

export const Dense = () => {
    const [selected, setSelected] = useState(null)

    return (
        <SingleSelectA11y
            dense
            name="a11y"
            selected={selected}
            onChange={setSelected}
            options={fiveOptions}
        />
    )
}

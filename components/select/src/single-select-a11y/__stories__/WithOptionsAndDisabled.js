import React, { useState } from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'
import { fiveOptions } from './options.js'

export const WithOptionsAndDisabled = () => {
    const [selected, setSelected] = useState(null)

    return (
        <SingleSelectA11y
            disabled
            name="a11y"
            selected={selected}
            onChange={setSelected}
            options={fiveOptions}
        />
    )
}

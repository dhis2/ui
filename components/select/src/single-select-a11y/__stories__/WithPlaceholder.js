import React, { useState } from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'
import { options } from './options.js'

export const WithPlaceholder = () => {
    const [selected, setSelected] = useState(null)
    const withoutEmptyOptions = options.slice(1)

    return (
        <SingleSelectA11y
            placeholder="Placeholder text"
            name="a11y"
            selected={selected}
            onChange={setSelected}
            options={withoutEmptyOptions}
        />
    )
}

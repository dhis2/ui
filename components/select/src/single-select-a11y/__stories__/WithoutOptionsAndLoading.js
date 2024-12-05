import React, { useState } from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'

export const WithoutOptionsAndLoading = () => {
    const [selected, setSelected] = useState(null)

    return (
        <SingleSelectA11y
            loading
            name="a11y"
            selected={selected}
            onChange={setSelected}
            options={[]}
        />
    )
}

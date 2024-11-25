import React, { useState } from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'
import { fiveOptions } from './options.js'

export const WithSelectionAndDisabled = () => {
    const [selected, setSelected] = useState({
        label: 'ANC 1st visit',
        value: 'anc_1st_visit',
    })

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

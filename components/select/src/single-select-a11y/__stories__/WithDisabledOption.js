import React, { useState } from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'
import { fiveOptions } from './options.js'

const fiveOptionsWithFourthDisabled = [
    ...fiveOptions.slice(0, 3),
    { ...fiveOptions[3], disabled: true },
    ...fiveOptions.slice(4),
]

export const WithDisabledOption = () => {
    const [selected, setSelected] = useState({
        label: 'ANC 1st visit',
        value: 'anc_1st_visit',
    })

    return (
        <SingleSelectA11y
            name="a11y"
            selected={selected}
            onChange={setSelected}
            options={fiveOptionsWithFourthDisabled}
        />
    )
}

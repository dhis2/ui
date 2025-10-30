import React, { useState } from 'react'
import { SimpleSingleSelect } from '../simple-single-select.js'
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
        <SimpleSingleSelect
            name="simple"
            selected={selected}
            onChange={setSelected}
            options={fiveOptionsWithFourthDisabled}
        />
    )
}

import React, { useState } from 'react'
import { SimpleSingleSelect } from '../simple-single-select.js'
import { fiveOptions } from './options.js'

export const WithOnBlur = () => {
    const [selected, setSelected] = useState(null)
    const [blurTime, setBlurTime] = useState('')

    return (
        <>
            <SimpleSingleSelect
                onBlur={() => setBlurTime(new Date().toISOString())}
                name="simple"
                selected={selected}
                onChange={setSelected}
                options={fiveOptions}
            />

            <p>Last time select received blur: {blurTime || 'never'}</p>
        </>
    )
}

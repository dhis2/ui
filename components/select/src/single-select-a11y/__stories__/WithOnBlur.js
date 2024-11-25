import React, { useState } from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'
import { fiveOptions } from './options.js'

export const WithOnBlur = () => {
    const [selected, setSelected] = useState(null)
    const [blurTime, setBlurTime] = useState('')

    return (
        <>
            <SingleSelectA11y
                onBlur={() => setBlurTime(new Date().toISOString())}
                name="a11y"
                selected={selected}
                onChange={setSelected}
                options={fiveOptions}
            />

            <p>Last time select received blur: {blurTime || 'never'}</p>
        </>
    )
}

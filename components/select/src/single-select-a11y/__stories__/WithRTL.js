import React, { useEffect, useState } from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'
import { fiveOptions } from './options.js'

export const WithRTL = () => {
    const [selected, setSelected] = useState({
        label: 'ANC 1st visit',
        value: 'anc_1st_visit',
    })

    // as options are rendered in Portal, the body dir (of the iframe) needs to be set to 'rtl'
    useEffect(() => {
        document.body.dir = 'rtl'
        return () => {
            document.body.dir = 'ltr'
        }
    }, [])

    return (
        <div dir="rtl">
            <SingleSelectA11y
                name="a11y"
                selected={selected}
                onChange={setSelected}
                options={fiveOptions}
            />
        </div>
    )
}

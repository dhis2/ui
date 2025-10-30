import React, { useEffect, useState } from 'react'
import { SimpleSingleSelect } from '../simple-single-select.js'
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
            <SimpleSingleSelect
                name="simple"
                selected={selected}
                onChange={setSelected}
                options={fiveOptions}
            />
        </div>
    )
}

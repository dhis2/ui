import React, { useEffect, useState } from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'
import { fiveOptions } from './options.js'

export const WithRTL = () => {
    const [value, setValue] = useState('anc_1st_visit')

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
                idPrefix="a11y"
                value={value}
                valueLabel={
                    value
                        ? fiveOptions.find((option) => option.value === value)
                              .label
                        : ''
                }
                onChange={(nextValue) => setValue(nextValue)}
                options={fiveOptions}
            />
        </div>
    )
}

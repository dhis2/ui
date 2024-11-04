import React, { useState } from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'
import { options } from './options.js'

export const EmptyWithEmptyNode = () => {
    const [value, setValue] = useState('')
    const emptyNode = (
        <div
            style={{
                color: 'red',
                textAlign: 'center',
                padding: '10px 0',
            }}
        >
            Custom empty text
        </div>
    )

    return (
        <SingleSelectA11y
            idPrefix="a11y"
            value={value}
            valueLabel={
                value
                    ? options.find((option) => option.value === value).label
                    : ''
            }
            onChange={(nextValue) => setValue(nextValue)}
            options={[]}
            empty={emptyNode}
        />
    )
}

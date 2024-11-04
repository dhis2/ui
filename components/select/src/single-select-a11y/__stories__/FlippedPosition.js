import React, { useState } from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'
import { fiveOptions } from './options.js'

export const FlippedPosition = () => {
    const [value, setValue] = useState('anc_1st_visit')

    return (
        <div
            style={{
                position: 'relative',
                // Accounting for the padding on the body
                height: 'calc(100vh - 32px)',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                }}
            >
                <SingleSelectA11y
                    idPrefix="a11y"
                    value={value}
                    valueLabel={
                        value
                            ? fiveOptions.find(
                                  (option) => option.value === value
                              ).label
                            : ''
                    }
                    onChange={(nextValue) => setValue(nextValue)}
                    options={fiveOptions}
                />
            </div>
        </div>
    )
}

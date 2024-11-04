import React, { useState } from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'
import { fiveOptions } from './options.js'

export const ShiftedIntoView = () => {
    const [value, setValue] = useState('anc_1st_visit')

    return (
        <>
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

            <style jsx>{`
                :global(html),
                :global(body),
                :global(#storybook-root) {
                    position: relative;
                    height: 300px !important;
                    max-height: 300px;
                }

                :global(#storybook-root) {
                    padding-top: 130px !important;
                }
            `}</style>
        </>
    )
}

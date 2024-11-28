import React, { useState } from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'
import { fiveOptions } from './options.js'

export const ShiftedIntoView = () => {
    const [selected, setSelected] = useState({
        label: 'ANC 1st visit',
        value: 'anc_1st_visit',
    })

    return (
        <>
            <SingleSelectA11y
                name="a11y"
                selected={selected}
                onChange={setSelected}
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

import React, { useState } from 'react'
import { SimpleSingleSelect } from '../simple-single-select.js'
import { fiveOptions } from './options.js'

export const DefaultPosition = () => {
    const [selected, setSelected] = useState({
        label: 'ANC 1st visit',
        value: 'anc_1st_visit',
    })

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
                    top: '50%',
                    left: 0,
                    transform: 'translateY(-50%)',
                    width: '100%',
                }}
            >
                <SimpleSingleSelect
                    name="simple"
                    selected={selected}
                    onChange={setSelected}
                    options={fiveOptions}
                />
            </div>
        </div>
    )
}

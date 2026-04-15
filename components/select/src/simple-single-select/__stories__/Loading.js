import React from 'react'
import { SimpleSingleSelect } from '../simple-single-select.tsx'
import { options } from './options.js'

export const Loading = () => {
    return (
        <SimpleSingleSelect
            loading
            name="simple"
            selected={null}
            onChange={() => null}
            options={options}
        />
    )
}

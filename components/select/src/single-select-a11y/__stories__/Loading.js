import React from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'
import { options } from './options.js'

export const Loading = () => {
    return (
        <SingleSelectA11y
            loading
            name="a11y"
            selected={null}
            onChange={() => null}
            options={options}
        />
    )
}

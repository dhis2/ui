import React from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'
import { options } from './options.js'

export const Loading = () => {
    return (
        <SingleSelectA11y
            loading
            idPrefix="a11y"
            value=""
            valueLabel=""
            onChange={() => null}
            options={options}
        />
    )
}

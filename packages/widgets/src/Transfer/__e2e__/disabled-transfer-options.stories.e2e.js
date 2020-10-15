import React from 'react'
import { Transfer } from '../../index.js'
import { options } from './common/options'
import { statefulDecorator } from './common/statefulDecorator'

export default {
    title: 'Disabled Source Options',
    decorators: [statefulDecorator()],
}

export const OneDisabled = (_, { selected, onChange }) => (
    <Transfer
        selected={selected}
        onChange={onChange}
        options={[
            ...options.slice(0, 3),
            { ...options[3], disabled: true },
            ...options.slice(4),
        ]}
    />
)

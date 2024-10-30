import React from 'react'
import { SimpleTransfer } from '../simple-transfer.js'
import { options } from './common/options.js'
import { statefulDecorator } from './common/stateful-decorator.js'

export default {
    title: 'Disabled Source Options',
    decorators: [statefulDecorator()],
}

export const OneDisabled = (_, { selected, onChange }) => (
    <SimpleTransfer
        selected={selected}
        onChange={onChange}
        options={[
            ...options.slice(0, 3),
            { ...options[3], disabled: true },
            ...options.slice(4),
        ]}
    />
)

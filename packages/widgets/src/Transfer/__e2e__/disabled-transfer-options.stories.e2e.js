/* eslint-disable react/prop-types */
import React from 'react'

import { Transfer } from '../../index.js'
import { statefulDecorator } from './common/statefulDecorator'
import { options } from './common/options'

export default {
    title: 'Disabled Source Options',
    decorators: [statefulDecorator()],
}

export const OneDisabled = ({ selected, onChange }) => (
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

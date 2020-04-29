/* eslint-disable react/prop-types */
import React from 'react'

import { Transfer } from '../../index.js'
import { options, statefulDecorator } from './common.js'

export default {
    title: 'Disabled Source Options',
    decorators: [statefulDecorator()],
}

export const OneDisabled = ({ selected, onChange }) => (
    <Transfer selected={selected} onChange={onChange}>
        {[
            ...options.slice(0, 3),
            React.cloneElement(options[3], { disabled: true }),
            ...options.slice(4),
        ]}
    </Transfer>
)

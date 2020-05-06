/* eslint-disable react/prop-types */
import React from 'react'

import { Transfer } from '../../index.js'
import { options, statefulDecorator } from './common.js'

export default { title: 'Transfer Display Order' }

window.options = options

export const NoSelection = ({ selected, onChange }) => (
    <Transfer selected={selected} onChange={onChange} options={options} />
)

export const SomeSelected = ({ selected, onChange }) => (
    <Transfer selected={selected} onChange={onChange} options={options} />
)

SomeSelected.story = {
    decorators: [
        statefulDecorator({
            initialState: options.slice(0, 4),
        }),
    ],
}

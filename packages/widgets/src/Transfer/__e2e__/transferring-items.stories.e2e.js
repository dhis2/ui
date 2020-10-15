import React from 'react'
import { Transfer } from '../../index.js'
import { options } from './common/options'
import { statefulDecorator } from './common/statefulDecorator'

export default {
    title: 'Transfer Transferring Items',
    decorators: [statefulDecorator()],
}

window.options = options

export const HasOptions = (_, { selected, onChange }) => (
    <Transfer selected={selected} onChange={onChange} options={options} />
)

export const SomeSelected = (_, { selected, onChange }) => (
    <Transfer selected={selected} onChange={onChange} options={options} />
)

SomeSelected.story = {
    decorators: [
        statefulDecorator({
            initialState: options.slice(0, 4).map(({ value }) => value),
        }),
    ],
}

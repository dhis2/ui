import React from 'react'
import { SimpleTransfer } from '../simple-transfer.js'
import { options } from './common/options.js'
import { statefulDecorator } from './common/stateful-decorator.js'

export default {
    title: 'SimpleTransfer Transferring Items',
    decorators: [statefulDecorator()],
}

window.options = options

export const HasOptions = (_, { selected, onChange }) => (
    <SimpleTransfer selected={selected} onChange={onChange} options={options} />
)

export const SomeSelected = (_, { selected, onChange }) => (
    <SimpleTransfer selected={selected} onChange={onChange} options={options} />
)

SomeSelected.story = {
    decorators: [
        statefulDecorator({
            initialState: options.slice(0, 4).map(({ value }) => value),
        }),
    ],
}

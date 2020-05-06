/* eslint-disable react/prop-types */
import React from 'react'
import { Transfer } from '../../index.js'
import { statefulDecorator } from './common/statefulDecorator'
import { options } from './common/options'

export default {
    title: 'Transfer Transferring Items',
    decorators: [statefulDecorator()],
}

window.options = options

export const HasOptions = ({ selected, onChange }) => (
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

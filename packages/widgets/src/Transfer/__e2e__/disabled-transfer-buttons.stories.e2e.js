/* eslint-disable react/prop-types */
import React from 'react'

import { Transfer } from '../../index.js'
import { options, statefulDecorator } from './common.js'

export default {
    title: 'Transfer Disabled Transfer Buttons',
    decorators: [statefulDecorator()],
}

export const NoOptions = ({ selected, onChange }) => (
    <Transfer selected={selected} onChange={onChange} options={[]} />
)

export const HasOptions = ({ selected, onChange }) => (
    <Transfer selected={selected} onChange={onChange} options={options} />
)

export const SomeOptionsSelected = ({ selected, onChange }) => (
    <Transfer selected={selected} onChange={onChange} options={options} />
)

export const OnlyDisabledSourceOptions = ({ selected, onChange }) => (
    <Transfer
        selected={selected}
        onChange={onChange}
        options={[{ ...options[0], disabled: true }]}
    />
)

SomeOptionsSelected.story = {
    decorators: [
        statefulDecorator({
            initialState: options.slice(0, 4),
        }),
    ],
}

export const AllOptionsSelected = ({ selected, onChange }) => (
    <Transfer selected={selected} onChange={onChange} options={options} />
)

AllOptionsSelected.story = {
    decorators: [
        statefulDecorator({
            initialState: options,
        }),
    ],
}

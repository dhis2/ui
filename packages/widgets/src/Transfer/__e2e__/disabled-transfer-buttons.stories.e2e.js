import React from 'react'
import { Transfer } from '../../index.js'
import { options } from './common/options'
import { statefulDecorator } from './common/statefulDecorator'

export default {
    title: 'Transfer Disabled Transfer Buttons',
    decorators: [statefulDecorator()],
}

export const NoOptions = (_, { selected, onChange }) => (
    <Transfer selected={selected} onChange={onChange} options={[]} />
)

export const HasOptions = (_, { selected, onChange }) => (
    <Transfer selected={selected} onChange={onChange} options={options} />
)

export const SomeOptionsSelected = (_, { selected, onChange }) => (
    <Transfer selected={selected} onChange={onChange} options={options} />
)

export const OnlyDisabledSourceOptions = (_, { selected, onChange }) => (
    <Transfer
        selected={selected}
        onChange={onChange}
        options={[{ ...options[0], disabled: true }]}
    />
)

SomeOptionsSelected.story = {
    decorators: [
        statefulDecorator({
            initialState: options.slice(0, 4).map(({ value }) => value),
        }),
    ],
}

export const AllOptionsSelected = (_, { selected, onChange }) => (
    <Transfer selected={selected} onChange={onChange} options={options} />
)

AllOptionsSelected.story = {
    decorators: [
        statefulDecorator({
            initialState: options.map(({ value }) => value),
        }),
    ],
}

import React from 'react'
import { Transfer } from '../transfer.js'
import { options } from './common/options.js'
import { statefulDecorator } from './common/stateful-decorator.js'

export default {
    title: 'Transfer highlight range of options',
    decorators: [statefulDecorator()],
}

export const HasOptions = (_, { onChange, selected }) => (
    <Transfer
        filterable
        selected={selected}
        onChange={onChange}
        options={options}
    />
)

export const HasSelected = (_, { onChange, selected }) => (
    <Transfer
        filterable
        onChange={onChange}
        selected={selected}
        options={options}
    />
)

HasSelected.story = {
    decorators: [
        statefulDecorator({
            initialState: options.slice(0, 4).map(({ value }) => value),
        }),
    ],
}

export const AllSelected = (_, { onChange, selected }) => (
    <Transfer
        filterable
        onChange={onChange}
        selected={selected}
        options={options}
    />
)

AllSelected.story = {
    decorators: [
        statefulDecorator({
            initialState: options.map(({ value }) => value),
        }),
    ],
}

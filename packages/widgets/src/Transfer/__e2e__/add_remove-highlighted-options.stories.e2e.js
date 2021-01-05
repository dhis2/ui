import React from 'react'
import { Transfer } from '../../index.js'
import { options } from './common/options'
import { statefulDecorator } from './common/statefulDecorator'

export default {
    title: 'Transfer add & remove highlighted options',
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
    <Transfer onChange={onChange} selected={selected} options={options} />
)

HasSelected.story = {
    decorators: [
        statefulDecorator({
            initialState: options.slice(0, 4).map(({ value }) => value),
        }),
    ],
}

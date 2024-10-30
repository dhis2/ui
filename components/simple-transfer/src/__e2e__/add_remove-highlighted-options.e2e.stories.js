import React from 'react'
import { SimpleTransfer } from '../simple-transfer.js'
import { options } from './common/options.js'
import { statefulDecorator } from './common/stateful-decorator.js'

export default {
    title: 'SimpleTransfer add & remove highlighted options',
    decorators: [statefulDecorator()],
}

export const HasSelected = (_, { onChange, selected }) => (
    <SimpleTransfer onChange={onChange} selected={selected} options={options} />
)

HasSelected.story = {
    decorators: [
        statefulDecorator({
            initialState: options.slice(0, 4).map(({ value }) => value),
        }),
    ],
}

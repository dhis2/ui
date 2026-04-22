import React from 'react'
import { Transfer } from '../transfer.js'
import { options } from './common/options.js'
import { statefulDecorator } from './common/stateful-decorator.js'

export default { title: 'Transfer Reorder Buttons' }

const renderReorderTransfer = (_, { selected, onChange }) => (
    <Transfer
        enableOrderChange
        selected={selected}
        onChange={onChange}
        options={options}
    />
)

export const HasSomeSelected = renderReorderTransfer.bind({})

HasSomeSelected.story = {
    decorators: [
        statefulDecorator({
            initialState: options.slice(0, 8).map(({ value }) => value),
        }),
    ],
}

export const HasThreeSelected = renderReorderTransfer.bind({})

HasThreeSelected.story = {
    decorators: [
        statefulDecorator({
            initialState: options.slice(0, 3).map(({ value }) => value),
        }),
    ],
}

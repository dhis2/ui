import React from 'react'
import { Transfer } from '../transfer.js'
import { options } from './common/options.js'
import { statefulDecorator } from './common/stateful-decorator.js'

export default { title: 'Transfer Reorder Buttons' }

export const HasSomeSelected = (_, { selected, onChange }) => (
    <Transfer
        enableOrderChange
        selected={selected}
        onChange={onChange}
        options={options}
    />
)

HasSomeSelected.story = {
    decorators: [
        statefulDecorator({
            initialState: options.slice(0, 3).map(({ value }) => value),
        }),
    ],
}

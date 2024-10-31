import React from 'react'
import { SimpleTransfer } from '../simple-transfer.js'
import { options } from './common/options.js'
import { statefulDecorator } from './common/stateful-decorator.js'

export default { title: 'Simple Transfer Reorder Buttons' }

export const HasSomeSelected = (_, { selected, onChange }) => (
    <SimpleTransfer
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

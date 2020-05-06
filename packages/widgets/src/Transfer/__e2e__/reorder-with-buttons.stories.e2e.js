/* eslint-disable react/prop-types */
import React from 'react'
import { Transfer } from '../../index.js'
import { statefulDecorator } from './common/statefulDecorator'
import { options } from './common/options'

export default { title: 'Transfer Reorder Buttons' }

export const HasSomeSelected = ({ selected, onChange }) => (
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
            initialState: options.slice(0, 3),
        }),
    ],
}

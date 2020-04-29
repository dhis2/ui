/* eslint-disable react/prop-types */
import React from 'react'
import { Transfer } from '../../index'
import { options, statefulDecorator } from './common'

export default { title: 'Transfer Reorder Buttons' }

export const HasSomeSelected = ({ selected, onChange }) => (
    <Transfer enableOrderChange selected={selected} onChange={onChange}>
        {options}
    </Transfer>
)

HasSomeSelected.story = {
    decorators: [
        statefulDecorator({
            initialState: options.slice(0, 3),
        }),
    ],
}

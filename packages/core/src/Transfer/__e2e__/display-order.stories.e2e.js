/* eslint-disable react/prop-types */
import React from 'react'

import { Transfer } from '../../index.js'
import { options, statefulDecorator } from './common.js'

export default { title: 'Transfer Display Order' }

window.options = options.map(child => {
    const { label, value } = child.props
    return { label, value }
})

export const NoSelection = ({ selected, onChange }) => (
    <Transfer selected={selected} onChange={onChange}>
        {options}
    </Transfer>
)

export const SomeSelected = ({ selected, onChange }) => (
    <Transfer selected={selected} onChange={onChange}>
        {options}
    </Transfer>
)

SomeSelected.story = {
    decorators: [
        statefulDecorator({
            initialState: options.slice(0, 4),
        }),
    ],
}

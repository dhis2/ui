/* eslint-disable react/prop-types */
import React from 'react'
import { Transfer } from '../../index'
import { options, statefulDecorator } from './common'

export default {
    title: 'Transfer Transferring Items',
    decorators: [statefulDecorator()],
}

window.options = options.map(child => {
    const { label, value } = child.props
    return { label, value }
})

export const HasOptions = ({ selected, onChange }) => (
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

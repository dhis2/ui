/* eslint-disable react/prop-types */
import React from 'react'

import { Transfer } from '../../index'
import { options, statefulDecorator } from './common'

export default {
    title: 'Transfer Disabled Transfer Buttons',
    decorators: [statefulDecorator()],
}

export const NoOptions = ({ selected, onChange }) => (
    <Transfer selected={selected} onChange={onChange} />
)

export const HasOptions = ({ selected, onChange }) => (
    <Transfer selected={selected} onChange={onChange}>
        {options}
    </Transfer>
)

export const SomeOptionsSelected = ({ selected, onChange }) => (
    <Transfer selected={selected} onChange={onChange}>
        {options}
    </Transfer>
)

export const OnlyDisabledSourceOptions = ({ selected, onChange }) => (
    <Transfer selected={selected} onChange={onChange}>
        {React.cloneElement(options[0], { disabled: true })}
    </Transfer>
)

SomeOptionsSelected.story = {
    decorators: [
        statefulDecorator({
            initialState: options.slice(0, 4),
        }),
    ],
}

export const AllOptionsSelected = ({ selected, onChange }) => (
    <Transfer selected={selected} onChange={onChange}>
        {options}
    </Transfer>
)

AllOptionsSelected.story = {
    decorators: [
        statefulDecorator({
            initialState: options,
        }),
    ],
}

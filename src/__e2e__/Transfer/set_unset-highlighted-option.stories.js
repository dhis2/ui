/* eslint-disable react/prop-types */
import React from 'react'

import { Transfer } from '../../index'
import { options, statefulDecorator /*, useTransferState*/ } from './common'

export default {
    title: 'Transfer set & unset higlighted options',
    decorators: [statefulDecorator()],
}

export const HasOptions = ({ onChange, selected }) => (
    <Transfer filterable selected={selected} onChange={onChange}>
        {options}
    </Transfer>
)

export const HasSelected = ({ onChange, selected }) => (
    <Transfer onChange={onChange} selected={selected}>
        {options}
    </Transfer>
)

HasSelected.story = {
    decorators: [
        statefulDecorator({
            initialState: options.slice(0, 4),
        }),
    ],
}

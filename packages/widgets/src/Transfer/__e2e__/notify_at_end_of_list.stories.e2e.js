/* eslint-disable react/prop-types */
import React from 'react'

import { Transfer } from '../Transfer'
import { statefulDecorator } from './common/statefulDecorator'
import { options } from './common/options'

export default {
    title: 'Transfer End Of List',
    decorators: [statefulDecorator()],
}

window.onSourceEndReached = window.Cypress
    ? window.Cypress.cy.stub()
    : () => console.log('onSourceEndReached')

window.onPickedEndReached = window.Cypress
    ? window.Cypress.cy.stub()
    : () => console.log('onPickedEndReached')

export const FullSourceList = ({ selected, onChange }) => (
    <Transfer
        options={options}
        selected={selected}
        onChange={onChange}
        onSourceEndReached={window.onSourceEndReached}
    />
)

export const FullPickedList = ({ selected, onChange }) => (
    <Transfer
        options={options}
        selected={selected}
        onChange={onChange}
        onPickedEndReached={window.onPickedEndReached}
    />
)

FullPickedList.story = {
    decorators: [
        statefulDecorator({
            initialState: options.map(({ value }) => value),
        }),
    ],
}

export const PartialSourceList = ({ selected, onChange }) => (
    <Transfer
        options={options.slice(0, 4)}
        selected={selected}
        onChange={onChange}
        onSourceEndReached={window.onSourceEndReached}
    />
)

export const PartialPickedList = ({ selected, onChange }) => (
    <Transfer
        options={options}
        selected={selected}
        onChange={onChange}
        onPickedEndReached={window.onPickedEndReached}
    />
)

PartialPickedList.story = {
    decorators: [
        statefulDecorator({
            initialState: options.slice(0, 4).map(({ value }) => value),
        }),
    ],
}

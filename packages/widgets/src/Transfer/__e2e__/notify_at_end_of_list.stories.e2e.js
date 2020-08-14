/* eslint-disable react/prop-types */
import React from 'react'

import { Transfer } from '../Transfer'
import { statefulDecorator } from './common/statefulDecorator'
import { options } from './common/options'

export default {
    title: 'Transfer End Of List',
    decorators: [statefulDecorator()],
}

window.onEndReached = window.Cypress
    ? window.Cypress.cy.stub()
    : () => console.log('onEndReached')

window.onEndReachedPicked = window.Cypress
    ? window.Cypress.cy.stub()
    : () => console.log('onEndReachedPicked')

export const FullSourceList = ({ selected, onChange }) => (
    <Transfer
        options={options}
        selected={selected}
        onChange={onChange}
        onEndReached={window.onEndReached}
    />
)

export const FullPickedList = ({ selected, onChange }) => (
    <Transfer
        options={options}
        selected={selected}
        onChange={onChange}
        onEndReachedPicked={window.onEndReachedPicked}
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
        onEndReached={window.onEndReached}
    />
)

export const PartialPickedList = ({ selected, onChange }) => (
    <Transfer
        options={options}
        selected={selected}
        onChange={onChange}
        onEndReachedPicked={window.onEndReachedPicked}
    />
)

PartialPickedList.story = {
    decorators: [
        statefulDecorator({
            initialState: options.slice(0, 4).map(({ value }) => value),
        }),
    ],
}

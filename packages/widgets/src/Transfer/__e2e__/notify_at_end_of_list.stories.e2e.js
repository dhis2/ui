import React from 'react'
import { Transfer } from '../Transfer'
import { options } from './common/options'
import { statefulDecorator } from './common/statefulDecorator'

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

export const FullSourceList = (_, { selected, onChange }) => (
    <Transfer
        options={options}
        selected={selected}
        onChange={onChange}
        onEndReached={window.onEndReached}
    />
)

export const FullPickedList = (_, { selected, onChange }) => (
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

export const PartialSourceList = (_, { selected, onChange }) => (
    <Transfer
        options={options.slice(0, 4)}
        selected={selected}
        onChange={onChange}
        onEndReached={window.onEndReached}
    />
)

export const PartialPickedList = (_, { selected, onChange }) => (
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

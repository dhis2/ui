import React, { useState } from 'react'
import { SimpleTransfer } from '../simple-transfer.js'
import { options } from './common/options.js'
import { statefulDecorator } from './common/stateful-decorator.js'

export default {
    title: 'SimpleTransfer End Of List',
    decorators: [statefulDecorator()],
}

window.onEndReached = window.Cypress
    ? window.Cypress.cy.stub()
    : () => console.log('onEndReached')

window.onEndReachedPicked = window.Cypress
    ? window.Cypress.cy.stub()
    : () => console.log('onEndReachedPicked')

export const FullSourceList = (_, { selected, onChange }) => {
    const [shownOptions, setShownOptions] = useState(options.slice(0, 4))

    return (
        <SimpleTransfer
            options={shownOptions}
            selected={selected}
            onChange={onChange}
            onEndReached={() => {
                setShownOptions(options)
                window.onEndReached()
            }}
        />
    )
}

export const FullPickedList = (_, { selected, onChange }) => {
    const [shownOptions, setShownOptions] = useState(options.slice(0, 4))

    return (
        <SimpleTransfer
            options={shownOptions}
            selected={selected}
            onChange={onChange}
            onEndReachedPicked={() => {
                setShownOptions(options)
                window.onEndReachedPicked()
            }}
        />
    )
}

FullPickedList.story = {
    decorators: [
        statefulDecorator({
            initialState: options.map(({ value }) => value),
        }),
    ],
}

export const PartialSourceList = (_, { selected, onChange }) => (
    <SimpleTransfer
        options={options.slice(0, 4)}
        selected={selected}
        onChange={onChange}
        onEndReached={window.onEndReached}
    />
)

export const PartialPickedList = (_, { selected, onChange }) => (
    <SimpleTransfer
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

import React, { useState } from 'react'
import { Transfer } from '../transfer.js'
import { options } from './common/options.js'
import { statefulDecorator } from './common/stateful-decorator.js'

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

export const OptionChangesForShortList = (_, { onChange, selected }) => {
    const [myOptions, setMyOptions] = useState(options.slice(0, 2))

    return (
        <>
            <label htmlFor="options-length">Number options:</label>
            <input
                type="number"
                id="options-length"
                name="options-length"
                step="1"
                min="1"
                max="20"
                value={myOptions.length.toString()}
                onChange={(event) => {
                    setMyOptions(options.slice(0, parseInt(event.target.value)))
                }}
            />
            <Transfer
                filterable
                selected={selected}
                onChange={onChange}
                options={myOptions}
                onEndReached={() => {
                    console.log('onEndReached', Date.now())
                }}
            />
        </>
    )
}
OptionChangesForShortList.story = {
    decorators: [
        statefulDecorator({
            initialState: [],
        }),
    ],
}

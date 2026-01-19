import React, { useMemo, useState } from 'react'
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

const selectedOptionsLookup = {
    'val-9': {
        value: 'val-9',
        label: 'Option nr. 9',
    },
}

export const OptionChangesForShortList = (_, { onChange, selected }) => {
    const [optionsCount, setOptionsCount] = useState(7)
    const myOptions = useMemo(() => {
        let counter = 1
        const newOptions = []
        while (counter <= optionsCount) {
            newOptions.push({
                value: `val-${counter}`,
                label: `Option nr. ${counter}`,
            })
            counter++
        }
        return newOptions
    }, [optionsCount])

    return (
        <>
            <button onClick={() => setOptionsCount((curr) => curr + 1)}>
                Increment options lists
            </button>
            <Transfer
                filterable
                selected={selected}
                selectedOptionsLookup={selectedOptionsLookup}
                onChange={onChange}
                options={myOptions}
                onEndReached={window.onEndReached}
                onEndReachedPicked={window.onEndReachedPicked}
            />
        </>
    )
}
OptionChangesForShortList.story = {
    decorators: [
        statefulDecorator({
            initialState: ['val-9'],
        }),
    ],
}

import { SingleSelectField, SingleSelectOption } from '@dhis2-ui/select'
import React, { useState } from 'react'
import { ContextSelector } from './context-selector.js'

const options = [
    { value: 'value 1', label: 'label 1' },
    { value: 'value 2', label: 'label 2' },
    { value: 'value 3', label: 'label 3' },
]

const createStateDecorator = (args) => {
    return (fn) => {
        const [selected, setSelected] = useState(args?.selected || '')
        const [open, setOpen] = useState(args?.open || false)
        return fn({ selected, open, setSelected, setOpen })
    }
}

const createStory =
    () =>
    (_, { open, setOpen, selected, setSelected }) =>
        (
            <ContextSelector
                label="Context selector"
                noValueMessage="No value message"
                open={open}
                setOpen={setOpen}
                value={
                    options.find(({ value }) => value === selected)?.label || ''
                }
            >
                <SingleSelectField
                    selected={selected}
                    onChange={({ selected: nextSelected }) => {
                        setSelected(nextSelected)
                        setOpen(false)
                    }}
                >
                    {options.map(({ value, label }) => (
                        <SingleSelectOption
                            key={value}
                            value={value}
                            label={label}
                        />
                    ))}
                </SingleSelectField>
            </ContextSelector>
        )

export default { title: 'ContextSelector' }

export const ClosedNoValue = createStory()
ClosedNoValue.decorators = [createStateDecorator()]

export const OpenNoValue = createStory()
OpenNoValue.decorators = [createStateDecorator({ open: true })]

export const ClosedWithValue = createStory()
ClosedWithValue.decorators = [createStateDecorator({ selected: 'value 1' })]

export const OpenWithValue = createStory()
OpenWithValue.decorators = [
    createStateDecorator({ open: true, selected: 'value 1' }),
]

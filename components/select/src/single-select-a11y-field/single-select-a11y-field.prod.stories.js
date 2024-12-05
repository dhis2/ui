import React, { useState } from 'react'
import { SingleSelectA11yField } from './index.js'

const description = `
\`SingleSelectA11yField\` is a wrapper around a \`SingleSelectA11y\` component that adds a label, help text, validation text, and other features.

See the SingleSelectA11y for more information, and read more at [Design System: Select](https://github.com/dhis2/design-system/blob/master/molecules/select.md).

\`\`\`js
import { SingleSelectA11yField, SingleSelectOption } from '@dhis2/ui'
\`\`\`

_**Note**: The dropdowns in some of the following stories won't appear correctly on this page. View these demos in the 'Canvas' tab._
`

const options = [
    { value: '1', label: 'one' },
    { value: '2', label: 'two' },
    { value: '3', label: 'three' },
    { value: '4', label: 'four' },
    { value: '5', label: 'five' },
    { value: '6', label: 'six' },
    { value: '7', label: 'seven' },
    { value: '8', label: 'eight' },
    { value: '9', label: 'nine' },
    { value: '10', label: 'ten' },
]

export default {
    title: 'SingleSelectA11yField',
    component: SingleSelectA11yField,
    parameters: { docs: { description: { component: description } } },
}

export const Default = () => {
    const [value, setValue] = useState('3')
    const valueLabel = value
        ? options.find((option) => option.value === value)?.label
        : ''

    return (
        <SingleSelectA11yField
            name="a11y"
            label="This is the label"
            value={value}
            valueLabel={valueLabel}
            onChange={(nextValue) => setValue(nextValue)}
            options={options}
        />
    )
}

export const WithHelpText = () => {
    const [value, setValue] = useState('3')
    const valueLabel = value
        ? options.find((option) => option.value === value)?.label
        : ''

    return (
        <SingleSelectA11yField
            name="a11y"
            label="This is the label"
            helpText="This is the help text"
            value={value}
            valueLabel={valueLabel}
            onChange={(nextValue) => setValue(nextValue)}
            options={options}
        />
    )
}

export const StatusValid = () => {
    const [value, setValue] = useState('3')
    const valueLabel = value
        ? options.find((option) => option.value === value)?.label
        : ''

    return (
        <SingleSelectA11yField
            valid
            name="a11y"
            label="This is the label"
            value={value}
            valueLabel={valueLabel}
            validationText="Totally valid!"
            onChange={(nextValue) => setValue(nextValue)}
            options={options}
        />
    )
}

export const StatusWarning = () => {
    const [value, setValue] = useState('3')
    const valueLabel = value
        ? options.find((option) => option.value === value)?.label
        : ''

    return (
        <SingleSelectA11yField
            warning
            name="a11y"
            label="This is the label"
            value={value}
            valueLabel={valueLabel}
            validationText="Hm, not quite, I warn thee!"
            onChange={(nextValue) => setValue(nextValue)}
            options={options}
        />
    )
}

export const StatusError = () => {
    const [value, setValue] = useState('3')
    const valueLabel = value
        ? options.find((option) => option.value === value)?.label
        : ''

    return (
        <SingleSelectA11yField
            error
            name="a11y"
            label="This is the label"
            value={value}
            valueLabel={valueLabel}
            validationText="That value is wrong. Sorry!"
            onChange={(nextValue) => setValue(nextValue)}
            options={options}
        />
    )
}

export const StatusDisabled = () => {
    const [value, setValue] = useState('3')
    const valueLabel = value
        ? options.find((option) => option.value === value)?.label
        : ''

    return (
        <SingleSelectA11yField
            disabled
            name="a11y"
            label="This is the label"
            value={value}
            valueLabel={valueLabel}
            onChange={(nextValue) => setValue(nextValue)}
            options={options}
        />
    )
}

export const Required = () => {
    const [value, setValue] = useState('3')
    const valueLabel = value
        ? options.find((option) => option.value === value)?.label
        : ''

    return (
        <SingleSelectA11yField
            required
            name="a11y"
            label="This is the label"
            value={value}
            valueLabel={valueLabel}
            onChange={(nextValue) => setValue(nextValue)}
            options={options}
        />
    )
}

export const InputWidth = () => {
    const [value, setValue] = useState('3')
    const valueLabel = value
        ? options.find((option) => option.value === value)?.label
        : ''

    return (
        <div style={{ width: 200 }}>
            <SingleSelectA11yField
                name="a11y"
                label="A very long label indeed, well at least longer than the input field to show how it looks and works and stuff"
                value={value}
                valueLabel={valueLabel}
                onChange={(nextValue) => setValue(nextValue)}
                options={options}
            />
        </div>
    )
}

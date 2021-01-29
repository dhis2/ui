import React from 'react'
import { InputField } from './InputField.js'

const logger = ({ name, value }) => console.info(`${name}: ${value}`)

const props = {
    label: 'Default label',
    name: 'Default',
    onChange: logger,
}

export default {
    title: 'Forms/Input/Input Field',
    component: InputField,
}

export const Default = () => <InputField name="nolabel" onChange={logger} />

export const NoPlaceholderNoValue = () => <InputField {...props} />
NoPlaceholderNoValue.story = {
    name: 'No placeholder, no value',
}

export const PlaceholderNoValue = () => (
    <InputField {...props} placeholder="Hold the place" />
)
PlaceholderNoValue.story = {
    name: 'Placeholder, no value',
}

export const WithHelpText = () => (
    <InputField
        {...props}
        placeholder="Hold the place"
        helpText="With some helping text to guide the user along"
    />
)
WithHelpText.story = {
    name: 'With Help text',
}

export const WithValue = () => (
    <InputField
        {...props}
        value="This is set through the value prop, which means the component is controlled."
    />
)
WithValue.story = {
    name: 'With value',
}

export const Focus = () => <InputField {...props} initialFocus />

export const StatusValid = () => (
    <InputField {...props} value="This value is valid" valid />
)
StatusValid.story = {
    name: 'Status: Valid',
}

export const StatusWarning = () => (
    <InputField {...props} value="This value produces a warning" warning />
)
StatusWarning.story = {
    name: 'Status: Warning',
}

export const StatusError = () => (
    <InputField
        {...props}
        error
        value="This value produces an error"
        helpText="This is some help text to advice what this input actually is."
        validationText="This describes the error, if a message is supplied."
    />
)
StatusError.story = {
    name: 'Status: Error',
}

export const StatusLoading = () => (
    <InputField
        {...props}
        value="This value produces a loading state"
        loading
    />
)
StatusLoading.story = {
    name: 'Status: Loading',
}

export const Disabled = () => (
    <InputField {...props} value="This field is disabled" disabled />
)

export const ReadOnly = () => (
    <InputField {...props} value="This field is disabled" readOnly />
)
ReadOnly.story = {
    name: 'Read only',
}

export const Dense = () => (
    <InputField {...props} value="This field is dense" dense />
)

export const InputWidth = () => (
    <>
        <InputField
            name="input1"
            label="My textarea has a width of 100px"
            inputWidth="100px"
            onChange={logger}
        />
        <InputField
            name="input2"
            label="My textarea has a width of 220px"
            inputWidth="220px"
            onChange={logger}
        />
    </>
)
InputWidth.story = {
    name: 'Input width',
}

export const LabelTextOverflow = () => (
    <InputField
        {...props}
        label="This label is too long to show on a single line of the input field's label. We just let it flow to the next line so the user can still read it. However, we should always aim to keep it shorter than this!"
        dense
        warning
    />
)
LabelTextOverflow.story = {
    name: 'Label text overflow',
}

export const ValueTextOverflow = () => (
    <InputField
        {...props}
        value="This value is too long in order to show on a single line of the input field. It should stay on one line, not in an extra line and which wouldn't look like a standard input"
        dense
        warning
    />
)
ValueTextOverflow.story = {
    name: 'Value text overflow',
}

export const Required = () => <InputField {...props} required />

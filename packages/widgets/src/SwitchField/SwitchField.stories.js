import React from 'react'
import { SwitchField } from './SwitchField.js'

const logger = ({ name, value, checked }) =>
    console.info(`name: ${name}, value: ${value}, checked: ${checked}`)

export default {
    title: 'Forms/Switch/Switch Field',
    component: SwitchField,
}

export const Default = () => (
    <SwitchField
        name="Ex"
        label="SwitchField"
        value="default"
        onChange={logger}
    />
)

export const FocusedUnchecked = () => (
    <SwitchField
        initialFocus
        name="Ex"
        label="SwitchField"
        value="default"
        onChange={logger}
    />
)

FocusedUnchecked.story = {
    name: 'Focused unchecked',
}

export const FocusedChecked = () => (
    <SwitchField
        initialFocus
        checked
        name="Ex"
        label="SwitchField"
        value="default"
        onChange={logger}
    />
)

FocusedChecked.story = {
    name: 'Focused checked',
}

export const Checked = () => (
    <SwitchField
        name="Ex"
        label="SwitchField"
        checked
        value="checked"
        onChange={logger}
    />
)

export const Required = () => (
    <SwitchField
        name="Ex"
        label="SwitchField"
        required
        value="checked"
        onChange={logger}
    />
)

export const Disabled = () => (
    <>
        <SwitchField
            name="Ex"
            label="SwitchField"
            disabled
            value="disabled"
            onChange={logger}
        />
        <SwitchField
            name="Ex"
            label="SwitchField"
            disabled
            checked
            value="disabled"
            onChange={logger}
        />
    </>
)

export const HelpText = () => (
    <>
        <SwitchField
            name="Ex"
            label="SwitchField"
            value="disabled"
            onChange={logger}
            helpText="Help text"
        />
        <SwitchField
            name="Ex"
            label="SwitchField"
            error
            validationText="Validation text (error state)"
            helpText="Help text"
            value="disabled"
            onChange={logger}
        />
    </>
)

HelpText.story = {
    name: 'Help text',
}

export const Valid = () => (
    <>
        <SwitchField
            name="Ex"
            label="SwitchField"
            valid
            validationText="I am a validation text"
            value="valid"
            onChange={logger}
        />
        <SwitchField
            name="Ex"
            label="SwitchField"
            valid
            validationText="I am a validation text"
            checked
            value="valid"
            onChange={logger}
        />
    </>
)

export const Warning = () => (
    <>
        <SwitchField
            name="Ex"
            label="SwitchField"
            warning
            validationText="I am a validation text"
            value="warning"
            onChange={logger}
        />
        <SwitchField
            name="Ex"
            label="SwitchField"
            warning
            validationText="I am a validation text"
            checked
            value="warning"
            onChange={logger}
        />
    </>
)

export const Error = () => (
    <>
        <SwitchField
            name="Ex"
            label="SwitchField"
            error
            validationText="I am a validation text"
            value="error"
            onChange={logger}
        />
        <SwitchField
            name="Ex"
            label="SwitchField"
            error
            validationText="I am a validation text"
            checked
            value="error"
            onChange={logger}
        />
    </>
)

export const ImageLabel = () => (
    <SwitchField
        name="Ex"
        label={<img src="https://picsum.photos/id/82/200/100" />}
        value="with-help"
        onChange={logger}
    />
)

ImageLabel.story = {
    name: 'Image label',
}

export const DefaultDense = () => (
    <SwitchField
        dense
        name="Ex"
        label="SwitchField"
        value="default"
        onChange={logger}
    />
)

DefaultDense.story = {
    name: 'Default - Dense',
}

export const FocusedUncheckedDense = () => (
    <SwitchField
        dense
        initialFocus
        name="Ex"
        label="SwitchField"
        value="default"
        onChange={logger}
    />
)

FocusedUncheckedDense.story = {
    name: 'Focused unchecked - Dense',
}

export const FocusedCheckedDense = () => (
    <SwitchField
        dense
        initialFocus
        checked
        name="Ex"
        label="SwitchField"
        value="default"
        onChange={logger}
    />
)

FocusedCheckedDense.story = {
    name: 'Focused checked - Dense',
}

export const CheckedDense = () => (
    <SwitchField
        dense
        name="Ex"
        label="SwitchField"
        checked
        value="checked"
        onChange={logger}
    />
)

CheckedDense.story = {
    name: 'Checked - Dense',
}

export const RequiredDense = () => (
    <SwitchField
        dense
        name="Ex"
        label="SwitchField"
        required
        value="checked"
        onChange={logger}
    />
)

RequiredDense.story = {
    name: 'Required - Dense',
}

export const DisabledDense = () => (
    <>
        <SwitchField
            dense
            name="Ex"
            label="SwitchField"
            disabled
            value="disabled"
            onChange={logger}
        />
        <SwitchField
            dense
            name="Ex"
            label="SwitchField"
            disabled
            checked
            value="disabled"
            onChange={logger}
        />
    </>
)

DisabledDense.story = {
    name: 'Disabled - Dense',
}

export const ValidDense = () => (
    <>
        <SwitchField
            dense
            name="Ex"
            label="SwitchField"
            valid
            validationText="I am a validation text"
            value="valid"
            onChange={logger}
        />
        <SwitchField
            dense
            name="Ex"
            label="SwitchField"
            valid
            validationText="I am a validation text"
            checked
            value="valid"
            onChange={logger}
        />
    </>
)

ValidDense.story = {
    name: 'Valid - Dense',
}

export const WarningDense = () => (
    <>
        <SwitchField
            dense
            name="Ex"
            label="SwitchField"
            warning
            validationText="I am a validation text"
            value="warning"
            onChange={logger}
        />
        <SwitchField
            dense
            name="Ex"
            label="SwitchField"
            warning
            validationText="I am a validation text"
            checked
            value="warning"
            onChange={logger}
        />
    </>
)

WarningDense.story = {
    name: 'Warning - Dense',
}

export const ErrorDense = () => (
    <>
        <SwitchField
            dense
            name="Ex"
            label="SwitchField"
            error
            validationText="I am a validation text"
            value="error"
            onChange={logger}
        />
        <SwitchField
            dense
            name="Ex"
            label="SwitchField"
            error
            validationText="I am a validation text"
            checked
            value="error"
            onChange={logger}
        />
    </>
)

ErrorDense.story = {
    name: 'Error - Dense',
}

export const ImageLabelDense = () => (
    <SwitchField
        dense
        name="Ex"
        label={<img src="https://picsum.photos/id/82/200/100" />}
        value="with-help"
        onChange={logger}
    />
)

ImageLabelDense.story = {
    name: 'Image label - Dense',
}

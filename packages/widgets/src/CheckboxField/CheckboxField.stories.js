import React from 'react'
import { CheckboxField } from './CheckboxField.js'

const logger = ({ name, value, checked }) =>
    console.info(`name: ${name}, value: ${value}, checked: ${checked}`)

export default {
    title: 'CheckboxField',
    component: CheckboxField,
}

export const Default = () => (
    <CheckboxField
        name="Ex"
        label="CheckboxField"
        value="default"
        onChange={logger}
    />
)

export const FocusedUnchecked = () => (
    <CheckboxField
        initialFocus
        name="Ex"
        label="CheckboxField"
        value="default"
        onChange={logger}
    />
)

FocusedUnchecked.story = {
    name: 'Focused unchecked',
}

export const FocusedChecked = () => (
    <CheckboxField
        initialFocus
        checked
        name="Ex"
        label="CheckboxField"
        value="default"
        onChange={logger}
    />
)

FocusedChecked.story = {
    name: 'Focused checked',
}

export const Checked = () => (
    <CheckboxField
        name="Ex"
        label="CheckboxField"
        checked
        value="checked"
        onChange={logger}
    />
)

export const Required = () => (
    <CheckboxField
        name="Ex"
        label="CheckboxField"
        required
        value="checked"
        onChange={logger}
    />
)

export const Disabled = () => (
    <>
        <CheckboxField
            name="Ex"
            label="CheckboxField"
            disabled
            value="disabled"
            onChange={logger}
        />
        <CheckboxField
            name="Ex"
            label="CheckboxField"
            disabled
            checked
            value="disabled"
            onChange={logger}
        />
    </>
)

export const HelpText = () => (
    <>
        <CheckboxField
            name="Ex"
            label="CheckboxField"
            value="disabled"
            onChange={logger}
            helpText="Help text"
        />
        <CheckboxField
            name="Ex"
            label="CheckboxField"
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
        <CheckboxField
            name="Ex"
            label="CheckboxField"
            valid
            validationText="I am a validation text"
            value="valid"
            onChange={logger}
        />
        <CheckboxField
            name="Ex"
            label="CheckboxField"
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
        <CheckboxField
            name="Ex"
            label="CheckboxField"
            warning
            validationText="I am a validation text"
            value="warning"
            onChange={logger}
        />
        <CheckboxField
            name="Ex"
            label="CheckboxField"
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
        <CheckboxField
            name="Ex"
            label="CheckboxField"
            error
            validationText="I am a validation text"
            value="error"
            onChange={logger}
        />
        <CheckboxField
            name="Ex"
            label="CheckboxField"
            error
            validationText="I am a validation text"
            checked
            value="error"
            onChange={logger}
        />
    </>
)

export const ImageLabel = () => (
    <CheckboxField
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
    <CheckboxField
        dense
        name="Ex"
        label="CheckboxField"
        value="default"
        onChange={logger}
    />
)

DefaultDense.story = {
    name: 'Default - Dense',
}

export const FocusedUncheckedDense = () => (
    <CheckboxField
        dense
        initialFocus
        name="Ex"
        label="CheckboxField"
        value="default"
        onChange={logger}
    />
)

FocusedUncheckedDense.story = {
    name: 'Focused unchecked - Dense',
}

export const FocusedCheckedDense = () => (
    <CheckboxField
        dense
        initialFocus
        checked
        name="Ex"
        label="CheckboxField"
        value="default"
        onChange={logger}
    />
)

FocusedCheckedDense.story = {
    name: 'Focused checked - Dense',
}

export const CheckedDense = () => (
    <CheckboxField
        dense
        name="Ex"
        label="CheckboxField"
        checked
        value="checked"
        onChange={logger}
    />
)

CheckedDense.story = {
    name: 'Checked - Dense',
}

export const RequiredDense = () => (
    <CheckboxField
        dense
        name="Ex"
        label="CheckboxField"
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
        <CheckboxField
            dense
            name="Ex"
            label="CheckboxField"
            disabled
            value="disabled"
            onChange={logger}
        />
        <CheckboxField
            dense
            name="Ex"
            label="CheckboxField"
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
        <CheckboxField
            dense
            name="Ex"
            label="CheckboxField"
            valid
            validationText="I am a validation text"
            value="valid"
            onChange={logger}
        />
        <CheckboxField
            dense
            name="Ex"
            label="CheckboxField"
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
        <CheckboxField
            dense
            name="Ex"
            label="CheckboxField"
            warning
            validationText="I am a validation text"
            value="warning"
            onChange={logger}
        />
        <CheckboxField
            dense
            name="Ex"
            label="CheckboxField"
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
        <CheckboxField
            dense
            name="Ex"
            label="CheckboxField"
            error
            validationText="I am a validation text"
            value="error"
            onChange={logger}
        />
        <CheckboxField
            dense
            name="Ex"
            label="CheckboxField"
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
    <CheckboxField
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

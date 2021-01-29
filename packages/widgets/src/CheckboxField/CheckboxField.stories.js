import React from 'react'
import { CheckboxField } from './CheckboxField.js'

const logger = ({ name, value, checked }) =>
    console.info(`name: ${name}, value: ${value}, checked: ${checked}`)

export default {
    title: 'Forms/Checkbox/Checkbox Field',
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
FocusedUnchecked.storyName = 'Focused unchecked'

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
FocusedChecked.storyName = 'Focused checked'

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
HelpText.storyName = 'Help text'

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
ImageLabel.storyName = 'Image label'

export const DefaultDense = () => (
    <CheckboxField
        dense
        name="Ex"
        label="CheckboxField"
        value="default"
        onChange={logger}
    />
)
DefaultDense.storyName = 'Default - Dense'

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
FocusedUncheckedDense.storyName = 'Focused unchecked - Dense'

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
FocusedCheckedDense.storyName = 'Focused checked - Dense'

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
CheckedDense.storyName = 'Checked - Dense'

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
RequiredDense.storyName = 'Required - Dense'

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
DisabledDense.storyName = 'Disabled - Dense'

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
ValidDense.storyName = 'Valid - Dense'

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
WarningDense.storyName = 'Warning - Dense'

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
ErrorDense.storyName = 'Error - Dense'

export const ImageLabelDense = () => (
    <CheckboxField
        dense
        name="Ex"
        label={<img src="https://picsum.photos/id/82/200/100" />}
        value="with-help"
        onChange={logger}
    />
)
ImageLabelDense.storyName = 'Image label - Dense'

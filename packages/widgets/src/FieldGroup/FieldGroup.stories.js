import { sharedPropTypes } from '@dhis2/ui-constants'
import { Checkbox, Radio, Switch } from '@dhis2/ui-core'
import React from 'react'
import { FieldGroup } from './FieldGroup.js'

const description = `
Wraps a group of form components like Radios, Checkboxes, or Switches. The FieldGroup wraps the form controls in a FieldSet and a Field component to group them and add a label, help text, and/or validation text.

\`\`\`js
import { FieldGroup } from '@dhis2/ui'
\`\`\`
`

export default {
    title: 'Forms/Field Group/Field Group',
    component: FieldGroup,
    parameters: { docs: { description: { component: description } } },
    argTypes: {
        valid: { ...sharedPropTypes.statusArgType },
        warning: { ...sharedPropTypes.statusArgType },
        error: { ...sharedPropTypes.statusArgType },
    },
}

export const WithCheckbox = args => (
    <FieldGroup {...args}>
        <Checkbox value="first" label="First" />
        <Checkbox value="second" label="Second" />
        <Checkbox value="third" label="Third" />
    </FieldGroup>
)

export const WithRadio = args => (
    <FieldGroup {...args}>
        <Radio value="first" label="First" />
        <Radio value="second" label="Second" checked />
        <Radio value="third" label="Third" />
        <Radio value="fourth" label="Fourth" />
    </FieldGroup>
)

export const WithSwitch = args => (
    <FieldGroup {...args}>
        <Switch value="first" label="First" />
        <Switch value="second" label="Second" />
        <Switch value="third" label="Third" />
        <Switch value="fourth" label="Fourth" />
    </FieldGroup>
)

export const WithLabel = args => (
    <>
        <FieldGroup {...args}>
            <Checkbox value="first" label="First" />
            <Checkbox value="second" label="Second" />
            <Checkbox value="third" label="Third" />
        </FieldGroup>
        <FieldGroup label="I am a required field" required>
            <Checkbox value="first" label="First" />
            <Checkbox value="second" label="Second" />
            <Checkbox value="third" label="Third" />
        </FieldGroup>
    </>
)
WithLabel.args = { label: 'I am a label/legend' }

export const HelpAndValidationTexts = args => (
    <>
        <FieldGroup {...args}>
            <Checkbox value="first" label="First" />
            <Checkbox value="second" label="Second" />
            <Checkbox value="third" label="Third" />
        </FieldGroup>
        <FieldGroup label="I am a legend" helpText="I am disabled" disabled>
            <Checkbox value="first" label="First" disabled />
            <Checkbox value="second" label="Second" disabled />
            <Checkbox value="third" label="Third" disabled />
        </FieldGroup>
        <FieldGroup label="I am a legend" valid validationText="I am valid">
            <Checkbox value="first" label="First" />
            <Checkbox value="second" label="Second" checked />
            <Checkbox value="third" label="Third" checked />
        </FieldGroup>
        <FieldGroup
            label="I am a legend"
            name="warning"
            warning
            validationText="I have a warning"
        >
            <Checkbox value="first" label="First" />
            <Checkbox value="second" label="Second" />
            <Checkbox value="third" label="Third" />
        </FieldGroup>
        <FieldGroup
            label="I am a legend"
            error
            validationText="I have an error"
        >
            <Checkbox value="first" label="First" />
            <Checkbox value="second" label="Second" />
            <Checkbox value="third" label="Third" />
        </FieldGroup>
    </>
)
HelpAndValidationTexts.args = {
    label: 'I am a field',
    helpText: 'I am help text!',
}

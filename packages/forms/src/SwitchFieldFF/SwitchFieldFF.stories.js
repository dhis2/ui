import React from 'react'
import { Field } from 'react-final-form'
import { formDecorator } from '../formDecorator.js'
import { hasValue } from '../validators/index.js'
import { SwitchFieldFF } from './SwitchFieldFF.js'

export default {
    title: 'Forms/Switch/Switch Field (Final Form)',
    component: SwitchFieldFF,
    decorators: [formDecorator],
}

export const Default = () => (
    <Field component={SwitchFieldFF} name="agree" label="Do you agree?" />
)

export const Required = () => (
    <Field
        name="agree"
        component={SwitchFieldFF}
        required
        validate={hasValue}
        label="Do you agree?"
    />
)

export const Disabled = () => (
    <Field
        name="agree"
        component={SwitchFieldFF}
        disabled
        label="Do you agree?"
    />
)

export const HelpText = () => (
    <Field
        name="agree"
        component={SwitchFieldFF}
        label="Do you agree?"
        helpText="Click to agree"
    />
)

HelpText.story = {
    name: 'Help text',
}

export const Statuses = () => (
    <>
        <Field
            name="valid"
            component={SwitchFieldFF}
            label="Valid"
            valid
            validationText="Validation text"
        />
        <Field
            name="warning"
            component={SwitchFieldFF}
            label="Warning"
            warning
            validationText="Validation text"
        />
        <Field
            name="error"
            component={SwitchFieldFF}
            label="Error"
            error
            validationText="Validation text"
        />
    </>
)

export const ValueWhenChecked = () => (
    <>
        <Field
            name="bool"
            component={SwitchFieldFF}
            label="I produce boolean form values"
            helpText="Click submit and check the console"
        />
        <Field
            type="checkbox"
            name="string"
            component={SwitchFieldFF}
            label="I produce string form values"
            value="value_when_checked"
            helpText="Click submit and check the console"
        />
        <Field
            type="checkbox"
            name="string"
            component={SwitchFieldFF}
            label="I also produce string form values"
            value="another_value_when_checked"
            helpText="Click submit and check the console"
        />
    </>
)

ValueWhenChecked.story = {
    name: 'Value when checked',
}

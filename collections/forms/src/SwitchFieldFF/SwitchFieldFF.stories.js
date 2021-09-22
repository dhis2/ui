import React from 'react'
import { Field } from 'react-final-form'
import { formDecorator } from '../formDecorator.js'
import { inputArgType, metaArgType } from '../shared/propTypes.js'
import { hasValue } from '../validators/index.js'
import { SwitchFieldFF } from './SwitchFieldFF.js'

const description = `
The \`SwitchFieldFF\` is a wrapper around a \`SwitchField\` that enables it to work with Final Form, the preferred library for form validation and utilities in DHIS 2 apps.

#### Final Form

See how to use Final Form at [Final Form - Getting Started](https://final-form.org/docs/react-final-form/getting-started).

Inside a Final Form \`<Form>\` component, these 'FF' UI components are intended to be used in the \`component\` prop of the [Final Form \`<Field>\` components](https://final-form.org/docs/react-final-form/api/Field) where they will receive some props from the Field, e.g. \`<Field component={SwitchFieldFF} />\`.  See the code samples below for examples.

#### Props

The props shown in the table below are generally provided to the \`SwitchFieldFF\` wrapper by the Final Form \`Field\`.

Note that any props beyond the API of the \`Field\` component will be spread to the \`SwitchFieldFF\`, which passes any extra props to the underlying \`SwitchField\` using \`{...rest}\`.

Therefore, to add any props to the \`SwitchFieldFF\` or \`SwitchField\`, add those props to the parent Final Form \`Field\` component.

Also see \`Switch\` and \`SwitchField\` for notes about props and implementation.

\`\`\`js
import { SwitchFieldFF } from '@dhis2/ui'
\`\`\`

Press **Submit** to see the form values logged to the console.
`

export default {
    title: 'Forms/Switch/Switch Field (Final Form)',
    component: SwitchFieldFF,
    decorators: [formDecorator],
    parameters: { docs: { description: { component: description } } },
    argTypes: {
        input: { ...inputArgType },
        meta: { ...metaArgType },
    },
}

export const Default = () => (
    <Field
        type="checkbox"
        component={SwitchFieldFF}
        name="agree"
        label="Do you agree?"
    />
)

export const Required = () => (
    <Field
        type="checkbox"
        name="agree"
        component={SwitchFieldFF}
        required
        validate={hasValue}
        label="Do you agree?"
    />
)

export const Disabled = () => (
    <Field
        type="checkbox"
        name="agree"
        component={SwitchFieldFF}
        disabled
        label="Do you agree?"
    />
)

export const HelpText = () => (
    <Field
        type="checkbox"
        name="agree"
        component={SwitchFieldFF}
        label="Do you agree?"
        helpText="Click to agree"
    />
)
HelpText.storyName = 'Help text'

export const Statuses = () => (
    <>
        <Field
            type="checkbox"
            name="valid"
            component={SwitchFieldFF}
            label="Valid"
            valid
            validationText="Validation text"
        />
        <Field
            type="checkbox"
            name="warning"
            component={SwitchFieldFF}
            label="Warning"
            warning
            validationText="Validation text"
        />
        <Field
            type="checkbox"
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
            type="checkbox"
            name="bool"
            component={SwitchFieldFF}
            label="I produce boolean form values"
            helpText="Click submit and check the console"
        />
        <Field
            type="checkbox"
            name="string"
            component={SwitchFieldFF}
            label="I produce string form values because the 'value' prop is set"
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
ValueWhenChecked.parameters = {
    docs: {
        description: {
            story: 'See the details about using the `value` prop at the [Final Form docs](https://final-form.org/docs/react-final-form/types/FieldProps#value)',
        },
    },
}

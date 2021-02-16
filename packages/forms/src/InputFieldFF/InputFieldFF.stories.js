import React from 'react'
import { Field } from 'react-final-form'
import { formDecorator } from '../formDecorator.js'
import { hasValue } from '../validators/index.js'
import { InputFieldFF } from './InputFieldFF.js'

const description = `
The \`InputFieldFF\` is a wrapper around a \`InputField\` that enables it to work with Final Form, the preferred library for form validation and utilities in DHIS 2 apps.

#### Final Form

See how to use Final Form at [Final Form - Getting Started](https://final-form.org/docs/react-final-form/getting-started).

Inside a Final Form \`<Form>\` component, these 'FF' UI components are intended to be used in the \`component\` prop of the [Final Form \`<Field>\` components](https://final-form.org/docs/react-final-form/api/Field) where they will receive some props from the Field, e.g. \`<Field component={InputFieldFF} />\`.  See the code samples below for examples.

#### Props

The props shown in the table below are generally provided to the \`InputFieldFF\` wrapper by the Final Form \`Field\`.

Note that any props beyond the API of the \`Field\` component will be spread to the \`InputFieldFF\`, which passes any extra props to the underlying \`InputField\` using \`{...rest}\`.

Therefore, to add any props to the \`InputFieldFF\` or \`InputField\`, add those props to the parent Final Form \`Field\` component.

Also see \`InputField\` for notes about props and implementation.

\`\`\`js
import { InputFieldFF } from '@dhis2/ui'
\`\`\`
`

export default {
    title: 'Forms/Input/Input Field (Final Form)',
    component: InputFieldFF,
    decorators: [formDecorator],
    parameters: { docs: { description: { component: description } } },
}

export const Default = () => (
    <Field component={InputFieldFF} name="agree" label="Do you agree?" />
)

export const Required = () => (
    <Field
        name="agree"
        component={InputFieldFF}
        required
        validate={hasValue}
        label="Do you agree?"
    />
)

export const Disabled = () => (
    <Field
        name="agree"
        component={InputFieldFF}
        disabled
        label="Do you agree?"
    />
)

export const HelpText = () => (
    <Field
        name="agree"
        component={InputFieldFF}
        label="Do you agree?"
        helpText="Click to agree"
    />
)
HelpText.storyName = 'Help text'

export const Statuses = () => (
    <>
        <Field
            name="valid"
            component={InputFieldFF}
            label="Valid"
            valid
            validationText="Validation text"
        />
        <Field
            name="warning"
            component={InputFieldFF}
            label="Warning"
            warning
            validationText="Validation text"
        />
        <Field
            name="error"
            component={InputFieldFF}
            label="Error"
            error
            validationText="Validation text"
        />
    </>
)

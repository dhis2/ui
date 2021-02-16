import React from 'react'
import { Field } from 'react-final-form'
import { formDecorator } from '../formDecorator.js'
import { hasValue } from '../validators/index.js'
import { TextAreaFieldFF } from './TextAreaFieldFF.js'

const description = `
The \`TextAreaFieldFF\` is a wrapper around a \`TextAreaField\` that enables it to work with Final Form, the preferred library for form validation and utilities in DHIS 2 apps.

#### Final Form

See how to use Final Form at [Final Form - Getting Started](https://final-form.org/docs/react-final-form/getting-started).

Inside a Final Form \`<Form>\` component, these 'FF' UI components are intended to be used in the \`component\` prop of the [Final Form \`<Field>\` components](https://final-form.org/docs/react-final-form/api/Field) where they will receive some props from the Field, e.g. \`<Field component={TextAreaFieldFF} />\`.  See the code samples below for examples.

#### Props

The props shown in the table below are generally provided to the \`TextAreaFieldFF\` wrapper by the Final Form \`Field\`.

Note that any props beyond the API of the \`Field\` component will be spread to the \`TextAreaFieldFF\`, which passes any extra props to the underlying \`TextAreaField\` using \`{...rest}\`.

Therefore, to add any props to the \`TextAreaFieldFF\` or \`TextAreaField\`, add those props to the parent Final Form \`Field\` component.

Also see \`TextArea\` and \`TextAreaField\` for notes about props and implementation.

\`\`\`js
import { TextAreaFieldFF } from '@dhis2/ui'
\`\`\`

Press **Submit** to see the form values logged to the console.
`

export default {
    title: 'Forms/Text Area/Text Area Field (Final Form)',
    component: TextAreaFieldFF,
    decorators: [formDecorator],
    parameters: { docs: { description: { component: description } } },
}

export const Default = () => (
    <Field component={TextAreaFieldFF} name="agree" label="Do you agree?" />
)

export const Autogrow = () => (
    <Field
        component={TextAreaFieldFF}
        name="agree"
        label="Do you agree?"
        autoGrow
    />
)

export const Required = () => (
    <Field
        name="agree"
        component={TextAreaFieldFF}
        required
        validate={hasValue}
        label="Do you agree?"
    />
)

export const Disabled = () => (
    <Field
        name="agree"
        component={TextAreaFieldFF}
        disabled
        label="Do you agree?"
    />
)

export const HelpText = () => (
    <Field
        name="agree"
        component={TextAreaFieldFF}
        label="Do you agree?"
        helpText="Click to agree"
    />
)
HelpText.storyName = 'Help text'

export const Statuses = () => (
    <>
        <Field
            name="valid"
            component={TextAreaFieldFF}
            label="Valid"
            valid
            validationText="Validation text"
        />
        <Field
            name="warning"
            component={TextAreaFieldFF}
            label="Warning"
            warning
            validationText="Validation text"
        />
        <Field
            name="error"
            component={TextAreaFieldFF}
            label="Error"
            error
            validationText="Validation text"
        />
    </>
)

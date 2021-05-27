import React from 'react'
import { Field } from 'react-final-form'
import { formDecorator } from '../formDecorator.js'
import { inputArgType, metaArgType } from '../shared/propTypes.js'
import { hasValue } from '../validators/index.js'
import { CheckboxFieldFF } from './CheckboxFieldFF.js'

const description = `
The \`CheckboxFieldFF\` is a wrapper around a \`CheckboxField\` that enables it to work with Final Form, the preferred library for form validation and utilities in DHIS 2 apps.

#### Final Form

See how to use Final Form at [Final Form - Getting Started](https://final-form.org/docs/react-final-form/getting-started).

Inside a Final Form \`<Form>\` component, these 'FF' UI components are intended to be used in the \`component\` prop of the [Final Form \`<Field>\` components](https://final-form.org/docs/react-final-form/api/Field) where they will receive some props from the Field, e.g. \`<Field component={CheckboxFieldFF} />\`.  See the code samples below for examples.

#### Props

The props shown in the table below are generally provided to the \`CheckboxFieldFF\` wrapper by the Final Form \`Field\`.

Note that any props beyond the API of the \`Field\` component will be spread to the \`CheckboxFieldFF\`, which passes any extra props to the underlying \`CheckboxField\` using \`{...rest}\`.

Therefore, to add any props to the \`CheckboxFieldFF\` or \`CheckboxField\`, add those props to the parent Final Form \`Field\` component.

Also see \`Checkbox\` and \`CheckboxField\` for notes about props and implementation.

\`\`\`js
import { CheckboxFieldFF } from '@dhis2/ui'
\`\`\`

Press **Submit** to see the form values logged to the console.
`

export default {
    title: 'Forms/Checkbox/Checkbox Field (Final Form)',
    component: CheckboxFieldFF,
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
        component={CheckboxFieldFF}
        name="agree"
        label="Do you agree?"
    />
)

export const RequiredWithValidate = () => (
    <Field
        type="checkbox"
        name="agree"
        component={CheckboxFieldFF}
        required
        validate={hasValue}
        label="Do you agree?"
        value="yes"
    />
)

export const Disabled = () => (
    <Field
        type="checkbox"
        name="agree"
        component={CheckboxFieldFF}
        disabled
        label="Do you agree?"
    />
)

export const HelpText = () => (
    <Field
        type="checkbox"
        name="agree"
        component={CheckboxFieldFF}
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
            component={CheckboxFieldFF}
            label="Valid"
            valid
            validationText="Validation text"
        />
        <Field
            type="checkbox"
            name="warning"
            component={CheckboxFieldFF}
            label="Warning"
            warning
            validationText="Validation text"
        />
        <Field
            type="checkbox"
            name="error"
            component={CheckboxFieldFF}
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
            component={CheckboxFieldFF}
            label="I produce boolean form values"
            helpText="Click submit and check the console"
        />
        <Field
            type="checkbox"
            name="string"
            component={CheckboxFieldFF}
            label="I produce string form values"
            value="checked-value"
            helpText="Click submit and check the console"
        />
        <Field
            type="checkbox"
            name="string"
            component={CheckboxFieldFF}
            label="I also produce string form values"
            value="another-checked-value"
            helpText="Click submit and check the console"
        />
    </>
)

import React from 'react'
import { Field } from 'react-final-form'
import { formDecorator } from '../formDecorator.js'
import { inputArgType, metaArgType } from '../shared/propTypes.js'
import { SingleSelectFieldFF } from './SingleSelectFieldFF.js'

const description = `
The \`SingleSelectFieldFF\` is a wrapper around a \`SingleSelectField\` that enables it to work with Final Form, the preferred library for form validation and utilities in DHIS 2 apps.

#### Final Form

See how to use Final Form at [Final Form - Getting Started](https://final-form.org/docs/react-final-form/getting-started).

Inside a Final Form \`<Form>\` component, these 'FF' UI components are intended to be used in the \`component\` prop of the [Final Form \`<Field>\` components](https://final-form.org/docs/react-final-form/api/Field) where they will receive some props from the Field, e.g. \`<Field component={SingleSelectFieldFF} />\`.  See the code samples below for examples.

#### Props

The props shown in the table below are generally provided to the \`SingleSelectFieldFF\` wrapper by the Final Form \`Field\`.

Note that any props beyond the API of the \`Field\` component will be spread to the \`SingleSelectFieldFF\`, which passes any extra props to the underlying \`SingleSelectField\` using \`{...rest}\`.

Therefore, to add any props to the \`SingleSelectFieldFF\` or \`SingleSelectField\`, add those props to the parent Final Form \`Field\` component.

Also see \`SingleSelect\` and \`SingleSelectField\` for notes about props and implementation.

\`\`\`js
import { SingleSelectFieldFF } from '@dhis2/ui'
\`\`\`

_**Note:** Dropdowns may not appear correctly on this page. See the affected demos in the 'Canvas' tab for propper dropdown placement._
`

const options = [
    { value: '1', label: 'one' },
    { value: '2', label: 'two' },
    { value: '3', label: 'three' },
    { value: '4', label: 'four' },
    { value: '5', label: 'five' },
    { value: '6', label: 'six' },
    { value: '7', label: 'seven' },
    { value: '8', label: 'eight' },
    { value: '9', label: 'nine' },
    { value: '10', label: 'ten' },
]

export default {
    title: 'Forms/Single Select/Single Select Field (Final Form)',
    component: SingleSelectFieldFF,
    decorators: [formDecorator],
    parameters: { docs: { description: { component: description } } },
    argTypes: {
        input: { ...inputArgType },
        meta: { ...metaArgType },
    },
}

export const Default = () => (
    <Field
        component={SingleSelectFieldFF}
        name="agree"
        label="Do you agree?"
        options={options}
    />
)

export const InitialValue = () => (
    <Field
        component={SingleSelectFieldFF}
        name="agree"
        label="Do you agree?"
        options={options}
        initialValue="4"
    />
)
InitialValue.storyName = 'InitialValue'

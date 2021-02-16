import React from 'react'
import { Field } from 'react-final-form'
import { formDecorator } from '../formDecorator.js'
import { inputArgType, metaArgType } from '../shared/propTypes.js'
import { MultiSelectFieldFF } from './MultiSelectFieldFF.js'

const description = `
The \`MultiSelectFieldFF\` is a wrapper around a \`MultiSelectField\` that enables it to work with Final Form, the preferred library for form validation and utilities in DHIS 2 apps.

#### Final Form

See how to use Final Form at [Final Form - Getting Started](https://final-form.org/docs/react-final-form/getting-started).

Inside a Final Form \`<Form>\` component, these 'FF' UI components are intended to be used in the \`component\` prop of the [Final Form \`<Field>\` components](https://final-form.org/docs/react-final-form/api/Field) where they will receive some props from the Field, e.g. \`<Field component={MultiSelectFieldFF} />\`.  See the code samples below for examples.

#### Props

The props shown in the table below are generally provided to the \`MultiSelectFieldFF\` wrapper by the Final Form \`Field\`.

Note that any props beyond the API of the \`Field\` component will be spread to the \`MultiSelectFieldFF\`, which passes any extra props to the underlying \`MultiSelectField\` using \`{...rest}\`.

Therefore, to add any props to the \`MultiSelectFieldFF\` or \`MultiSelectField\`, add those props to the parent Final Form \`Field\` component.

Also see \`MultiSelect\` and \`MultiSelectField\` for notes about props and implementation.

\`\`\`js
import { MultiSelectFieldFF } from '@dhis2/ui'
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

const initialValue = ['3', '4', '9', '10']

export default {
    title: 'Forms/Multi Select/Multi Select Field (Final Form)',
    component: MultiSelectFieldFF,
    decorators: [formDecorator],
    parameters: { docs: { description: { component: description } } },
    argTypes: {
        input: { ...inputArgType },
        meta: { ...metaArgType },
    },
}

export const Default = () => (
    <Field
        component={MultiSelectFieldFF}
        name="agree"
        label="Do you agree?"
        options={options}
    />
)

export const InitialValue = () => (
    <Field
        component={MultiSelectFieldFF}
        name="agree"
        label="Do you agree?"
        options={options}
        initialValue={initialValue}
    />
)
InitialValue.storyName = 'InitialValue'

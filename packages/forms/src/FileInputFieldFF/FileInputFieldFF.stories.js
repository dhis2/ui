import React from 'react'
import { Field } from 'react-final-form'
import { formDecorator } from '../formDecorator.js'
import { inputArgType, metaArgType } from '../shared/propTypes.js'
import { hasValue } from '../validators/index.js'
import { FileInputFieldFF } from './FileInputFieldFF.js'

const description = `
The \`FileInputFieldFF\` is a wrapper around a \`FileInputField\` that enables it to work with Final Form, the preferred library in DHIS 2 apps for form validation and utilities.

#### Final Form

See how to use Final Form at [Final Form - Getting Started](https://final-form.org/docs/react-final-form/getting-started).

Inside a Final Form \`<Form>\` component, these 'FF' UI components are intended to be used in the \`component\` prop of the [Final Form \`<Field>\` components](https://final-form.org/docs/react-final-form/api/Field) where they will receive some props from the Field, e.g. \`<Field component={FileInputFieldFF} />\`.  See the code samples below for examples.

#### Props

The props shown in the table below are generally provided to the \`FileInputFieldFF\` wrapper by the Final Form \`Field\`.

Note that any props beyond the API of the \`Field\` component will be spread to the \`FileInputFieldFF\`, which passes any extra props to the underlying \`FileInputField\` using \`{...rest}\`.

Therefore, to add any props to the \`FileInputFieldFF\` or \`FileInputField\`, add those props to the parent Final Form \`Field\` component.

Also see \`FileInput\` and \`FileInputField\` for notes about props and implementation.


\`\`\`js
import { FileInputFieldFF } from '@dhis2/ui'
\`\`\`
`

const files = [new File([], 'file1.txt'), new File([], 'file2.txt')]

export default {
    title: 'Forms/File Input/File Input Field (Final Form)',
    component: FileInputFieldFF,
    decorators: [formDecorator],
    parameters: { docs: { description: { component: description } } },
    argTypes: {
        input: { ...inputArgType },
        meta: { ...metaArgType },
    },
}

export const Default = () => (
    <Field
        component={FileInputFieldFF}
        name="upload"
        label="This is a file upload"
    />
)

export const Required = () => (
    <Field
        component={FileInputFieldFF}
        name="upload"
        label="This is a file upload"
        required
        validate={hasValue}
    />
)

export const Multifile = () => (
    <Field
        component={FileInputFieldFF}
        name="upload"
        label="This is a file upload"
        multifile
    />
)

export const WithValues = () => (
    <Field
        component={FileInputFieldFF}
        name="upload"
        label="This is a file upload"
        required
        multifile
        initialValue={files}
        validate={hasValue}
    />
)
WithValues.storyName = 'With values'

export const PreventPlaceholder = () => (
    <Field
        component={FileInputFieldFF}
        name="upload"
        label="This is a file upload"
        placeholder=""
    />
)
PreventPlaceholder.storyName = 'Prevent placeholder'

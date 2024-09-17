import { FieldGroup } from '@dhis2-ui/field'
import React from 'react'
import { Field } from 'react-final-form'
import { formDecorator } from '../formDecorator.js'
import { inputArgType, metaArgType } from '../shared/propTypes.js'
import { RadioFieldFF } from './RadioFieldFF.js'

const description = `
The \`RadioFieldFF\` is a wrapper around a \`Radio\` that enables it to work with Final Form, the preferred library for form validation and utilities in DHIS 2 apps.

#### Final Form

See how to use Final Form at [Final Form - Getting Started](https://final-form.org/docs/react-final-form/getting-started).

Inside a Final Form \`<Form>\` component, these 'FF' UI components are intended to be used in the \`component\` prop of the [Final Form \`<Field>\` components](https://final-form.org/docs/react-final-form/api/Field) where they will receive some props from the Field, e.g. \`<Field component={RadioFieldFF} />\`.  See the code samples below for examples.

#### Props

The props shown in the table below are generally provided to the \`RadioFieldFF\` wrapper by the Final Form \`Field\`.

Note that any props beyond the API of the \`Field\` component will be spread to the \`RadioFieldFF\`, which passes any extra props to the underlying \`Radio\` using \`{...rest}\`.

Therefore, to add any props to the \`RadioFieldFF\` or \`Radio\`, add those props to the parent Final Form \`Field\` component.

Also see \`Radio\` for notes about props and implementation.

\`\`\`js
import { RadioFieldFF } from '@dhis2/ui'
\`\`\`

Press **Submit** to see the form values logged to the console.
`

export default {
    title: 'Radio Field (Final Form)',
    component: RadioFieldFF,
    decorators: [formDecorator],
    parameters: { docs: { description: { component: description } } },
    argTypes: {
        input: { ...inputArgType },
        meta: { ...metaArgType },
    },
}

export const Default = () => (
    <FieldGroup>
        <Field
            type="radio"
            component={RadioFieldFF}
            name="choice"
            label="One"
            value="one"
        />
        <Field
            type="radio"
            component={RadioFieldFF}
            name="choice"
            label="Two"
            value="two"
        />
        <Field
            type="radio"
            component={RadioFieldFF}
            name="choice"
            label="Three"
            value="three"
        />
    </FieldGroup>
)

export const Statuses = () => (
    <>
        <FieldGroup label="Valid">
            <Field
                type="radio"
                name="valid"
                component={RadioFieldFF}
                label="Valid"
                value="valid"
                valid
            />
        </FieldGroup>
        <FieldGroup label="Warning">
            <Field
                type="radio"
                name="warning"
                component={RadioFieldFF}
                label="Warning"
                value="warning"
                warning
            />
        </FieldGroup>
        <FieldGroup label="Error">
            <Field
                type="radio"
                name="error"
                component={RadioFieldFF}
                label="Error"
                value="error"
                error
            />
        </FieldGroup>
    </>
)

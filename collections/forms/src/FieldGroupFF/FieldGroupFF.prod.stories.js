import React from 'react'
import { Field } from 'react-final-form'
import { CheckboxFieldFF } from '../CheckboxFieldFF/CheckboxFieldFF.js'
import { formDecorator } from '../formDecorator.js'
import { hasValue } from '../validators/index.js'
import { FieldGroupFF } from './FieldGroupFF.js'

const description = `
This component is intended for use with [Final Form](https://final-form.org/docs/react-final-form/getting-started), the preferred library for form validation and utilities in DHIS 2 apps.

\`FieldGroupFF\` groups related fields (using the Final Form \`<Field>\`), like checkboxes, and adds a label and name.

\`\`\`js
import { FieldGroupFF } from '@dhis2/ui'
\`\`\`

Press **Submit** to see the form values logged to the console.
`

export default {
    title: 'Field Group (Final Form)',
    component: FieldGroupFF,
    decorators: [formDecorator],
    parameters: { docs: { description: { component: description } } },
}

export const Default = () => (
    <FieldGroupFF label="Group label" required name="set">
        <Field
            type="checkbox"
            component={CheckboxFieldFF}
            name="set"
            label="One"
            value="one"
            validate={hasValue}
            validationText={null}
        />

        <Field
            type="checkbox"
            component={CheckboxFieldFF}
            name="set"
            label="Two"
            validate={hasValue}
            value="two"
            validationText={null}
        />
    </FieldGroupFF>
)

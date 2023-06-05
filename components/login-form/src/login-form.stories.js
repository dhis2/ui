import { CustomDataProvider } from '@dhis2/app-runtime'
import React from 'react'
import { LoginForm } from './index.js'

const subtitle = `Used to log in to DHIS2 instance`

const description = `
This form provides functionality to log in.

\`\`\`js
import { LoginForm } from '@dhis2/ui'
\`\`\`
`

export default {
    title: 'Login Form',
    component: LoginForm,
    parameters: {
        componentSubtitle: subtitle,
        docs: { description: { component: description } },
    },
    argTypes: {
    },
}

const Template = (args) => <CustomDataProvider><LoginForm {...args} /></CustomDataProvider>

export const Default = Template.bind({})
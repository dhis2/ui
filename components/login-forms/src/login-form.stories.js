import React from 'react'
import {
    LoginForm,
    PasswordResetRequestForm,
    PasswordUpdateForm,
    CreateAccountForm,
    CompleteRegistrationForm,
    ConfirmEmailForm,
} from './index.js'

const description = `
A login form

\`\`\`js
import { LoginPage } from '@dhis2/ui'
\`\`\`
`

export default {
    title: 'Login Forms',
    component: LoginForm,
    parameters: { docs: { description: { component: description } } },
}

// const Template = (args) => <LoginForm {...args} />

export const Login = () => <LoginForm />
// Login.args = {}

export const UpdatePassword = () => <PasswordUpdateForm />
// UpdatePassword.args = {}

export const RequestResetPassword = () => <PasswordResetRequestForm />
// RequestResetPassword.args = {}

export const AccountCreation = () => <CreateAccountForm />
// AccountCreation.args = {}

export const ConfirmEmail = () => <ConfirmEmailForm />
// ConfirmEmail.args = {}

export const CompleteRegistration = () => <CompleteRegistrationForm />
// CompleteRegistration.args = {}

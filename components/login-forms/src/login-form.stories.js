import React from 'react'
import { LoginForm } from './index.js'
import { PasswordResetRequestForm } from './index.js'
import { PasswordUpdateForm } from './index.js'
import { CreateAccountForm } from './index.js'
import {CompleteRegistrationForm} from './index.js'
import {ConfirmEmailForm} from './index.js'

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

export const Login = ({args}) => <LoginForm {...args} />
Login.args = {}

export const UpdatePassword = ({args}) => <PasswordUpdateForm/>
UpdatePassword.args = {}

export const RequestResetPassword = ({args}) => <PasswordResetRequestForm/>
RequestResetPassword.args = {}

export const AccountCreation = ({args}) => <CreateAccountForm/>
AccountCreation.args = {}

export const ConfirmEmail = ({args}) => <ConfirmEmailForm/>
ConfirmEmail.args = {}

export const CompleteRegistration = ({args}) => <CompleteRegistrationForm/>
CompleteRegistration.args = {}

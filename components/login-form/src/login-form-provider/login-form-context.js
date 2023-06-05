import { createContext } from 'react'

const LoginFormContext = createContext({
    allowAccountRecovery: false,
    emailConfigured: false,
    selfRegistrationEnabled: false,
    selfRegistrationNoRecaptcha: false,
    uiLocale: 'undefined',
})

export { LoginFormContext }

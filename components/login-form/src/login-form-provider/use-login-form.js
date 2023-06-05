import { useContext } from 'react'
import { LoginFormContext } from './login-form-context.js'

export const useLoginForm = () => useContext(LoginFormContext)

import { useLoginForm } from '../login-form-provider/use-login-form.js'

export const useGetErrorIfNotAllowed = (requiredSettings) => {
    // redirect to main page if password reset is not allowed
    const loginConfig = useLoginForm()

    let notAllowed = false
    for (const setting of requiredSettings) {
        if (loginConfig[setting] === false) {
            notAllowed = true
            break
        }
    }

    return { notAllowed }
}

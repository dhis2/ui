import { useLoginConfig } from '../providers/use-login-config.js'

export const useGetErrorIfNotAllowed = (requiredSettings) => {
    // redirect to main page if password reset is not allowed
    const loginConfig = useLoginConfig()

    let notAllowed = false
    for (const setting of requiredSettings) {
        if (loginConfig[setting] === false) {
            notAllowed = true
            break
        }
    }

    return { notAllowed }
}

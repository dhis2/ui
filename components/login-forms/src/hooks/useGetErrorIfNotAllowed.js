import { useLoginSettings } from '@dhis2/app-runtime'
// import { useLoginSettings } from '../providers/use-login-settings.js'

export const useGetErrorIfNotAllowed = (requiredSettings) => {
    // redirect to main page if password reset is not allowed
    const loginConfig = useLoginSettings()

    let notAllowed = false
    for (const setting of requiredSettings) {
        if (loginConfig[setting] === false) {
            notAllowed = true
            break
        }
    }

    return { notAllowed }
}

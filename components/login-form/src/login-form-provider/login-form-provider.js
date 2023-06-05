import { useDataQuery } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import PropTypes from 'prop-types'
import React, {useEffect, useState} from 'react'
import { Loader } from '../components/loader.js'
import { LoginFormContext } from './login-form-context.js'

const query = {
    loginConfig: {
        resource: 'auth/loginConfig',
    }
}

// defaults for testing while endpoints are in development

const defaultProviderValues = {
    allowAccountRecovery: true,
    emailConfigured: true,
    selfRegistrationEnabled: true,
    selfRegistrationNoRecaptcha: false,
    uiLocale: 'en',
    dir: 'ltr'
}
//

const LoginFormProvider = ({ dir, uiLocale, children }) => {
    const { data, loading, error } = useDataQuery(query)

    // delay display of loader
    const [loadingWaitOver, setLoadingWaitOver] = useState(false)
    useEffect(()=>{
        let loadingWait
        if (loading) {
            loadingWait = setTimeout(()=>setLoadingWaitOver(true),2000)
            
        } else {
            setLoadingWaitOver(false)
        }
        return () => {
            clearTimeout(loadingWait)
            setLoadingWaitOver(false)
        }
    },[loading])

    if (loading) {
        if (loadingWaitOver) {
            return <Loader />
        }
        return null
    }

    if (error) {
        /**
         * provide an error boundary? or proceed with non-custom login page?
         */
    }

    const providerValue = {
        ...defaultProviderValues,
        uiLocale: uiLocale ?? defaultProviderValues.uiLocale,
        ...data?.loginConfig,
        dir: dir?.includes('rtl','ltr') ? dir : i18n.dir()
    }
    

    return (
        <LoginFormContext.Provider value={providerValue}>
            <div dir={dir?.includes('rtl','ltr') ? dir : i18n.dir()}>{children}</div>
        </LoginFormContext.Provider>
    )
}

LoginFormProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export { LoginFormProvider }

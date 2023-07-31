import { useDataMutation } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import {
    CreateAccount,
    CREATE_FORM_TYPES,
} from '../components/account-creation-form.js'
import { BackToLoginButton } from '../components/back-to-login-button.js'
import { FormContainer } from '../components/form-container.js'
import { FormNotice } from '../components/form-notice.js'
import { NotAllowedNotice } from '../components/not-allowed-notice.js'
import { useGetErrorIfNotAllowed, useParams } from '../hooks/index.js'
import { useLoginConfig } from '../providers/use-login-config.js'

const selfRegisterMutation = {
    resource: 'auth/completeRegistration',
    type: 'create',
    data: (data) => data,
}

const CompleteRegistrationForm = ({ uiLocale }) => {
    // depends on https://dhis2.atlassian.net/browse/DHIS2-14684
    const [resetPassword, { loading, fetching, error, data }] =
        useDataMutation(selfRegisterMutation)
    const [token, setToken] = useState(null)
    const [email, setEmail] = useState(null)
    const [username, setUsername] = useState(null)
    const [parametersMissing, setParametersMissing] = useState(false)
    const params = useParams()

    useEffect(() => {
        const token = params.get('token')
        const email = params.get('email')
        const username = params.get('username')
        if (!token || !email || !username) {
            setParametersMissing(true)
        } else {
            setToken(token)
            setEmail(email)
            setUsername(username)
        }
    }, [params])

    if (parametersMissing) {
        return (
            <>
                <FormNotice
                    error={true}
                    title={i18n.t('Cannot process registration', {
                        lng: uiLocale,
                    })}
                >
                    <span>
                        {i18n.t(
                            'Information required to process your registration is missing. Please contact your system administrator.'
                        )}
                    </span>
                </FormNotice>
                <BackToLoginButton uiLocale={uiLocale} />
            </>
        )
    }

    if (token === null || email === null || username === null) {
        return null
    }

    const prepopulatedFields = { email, username }

    const handleCompleteRegistration = (values) => {
        resetPassword({ ...values, token })
    }
    return (
        <CreateAccount
            createType={CREATE_FORM_TYPES.complete}
            emailVerificationOnSuccess={false}
            loading={loading || fetching}
            error={error}
            data={data}
            handleRegister={handleCompleteRegistration}
            prepopulatedFields={prepopulatedFields}
        />
    )
}

CompleteRegistrationForm.propTypes = {
    uiLocale: PropTypes.string,
}

const requiredPropsForCreateAccount = ['emailConfigured']

export const CompleteRegistrationFormWrapper = ({ width }) => {
    const { uiLocale } = useLoginConfig()
    const { notAllowed } = useGetErrorIfNotAllowed(
        requiredPropsForCreateAccount
    )

    if (notAllowed) {
        return <NotAllowedNotice uiLocale={uiLocale} />
    }

    return (
        <>
            <FormContainer
                width={width}
                title={i18n.t('Create account', { lng: uiLocale })}
            >
                <CompleteRegistrationForm uiLocale={uiLocale} />
            </FormContainer>
        </>
    )
}

CompleteRegistrationFormWrapper.propTypes = {
    width: PropTypes.string,
}

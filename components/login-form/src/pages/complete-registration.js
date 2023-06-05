import { useDataMutation } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import PropTypes from 'prop-types'
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import {
    CreateAccountForm,
    CREATE_FORM_TYPES,
} from '../components/account-creation-form.js'
import { BackToLoginButton } from '../components/back-to-login-button.js'
import { FormContainer } from '../components/form-container.js'
import { FormNotice } from '../components/form-notice.js'
import { NotAllowedNotice } from '../components/not-allowed-notice.js'
import { useGetErrorIfNotAllowed } from '../hooks/index.js'
import { useLoginForm } from '../login-form-provider/use-login-form.js'

const selfRegisterMutation = {
    resource: 'auth/completeRegistration',
    type: 'create',
    data: (data) => data,
}

const CompleteRegistrationFormWrapper = ({ uiLocale }) => {
    // depends on https://dhis2.atlassian.net/browse/DHIS2-14684
    const [resetPassword, { loading, fetching, error, data }] =
        useDataMutation(selfRegisterMutation)

    const [searchParams] = useSearchParams()
    const token = searchParams.get('token')
    const email = searchParams.get('email')
    const username = searchParams.get('username')

    if (!token || !email || !username) {
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

    const prepopulatedFields = { email, username }

    const handleCompleteRegistration = (values) => {
        resetPassword({ ...values, token })
    }
    return (
        <CreateAccountForm
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

CompleteRegistrationFormWrapper.propTypes = {
    uiLocale: PropTypes.string,
}

const requiredPropsForCreateAccount = ['emailConfigured']

const CompleteRegistrationPage = () => {
    const { uiLocale } = useLoginForm()
    const { notAllowed } = useGetErrorIfNotAllowed(
        requiredPropsForCreateAccount
    )

    if (notAllowed) {
        return <NotAllowedNotice uiLocale={uiLocale} />
    }

    return (
        <>
            <FormContainer title={i18n.t('Create account', { lng: uiLocale })}>
                <CompleteRegistrationFormWrapper uiLocale={uiLocale} />
            </FormContainer>
        </>
    )
}

export default CompleteRegistrationPage

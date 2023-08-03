import { useDataMutation, useLoginSettings } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import PropTypes from 'prop-types'
import React from 'react'
import {
    CreateAccount,
    CREATE_FORM_TYPES,
} from '../components/account-creation-form.js'
import { FormContainer } from '../components/form-container.js'
import { NotAllowedNotice } from '../components/not-allowed-notice.js'
import { useGetErrorIfNotAllowed } from '../hooks/index.js'

// import { useLoginSettings } from '../providers/use-login-settings.js'

const selfRegisterMutation = {
    resource: 'auth/register',
    type: 'create',
    data: (data) => data,
}

const CreateAccountForm = () => {
    // depends on https://dhis2.atlassian.net/browse/DHIS2-14615
    const { emailConfigured } = useLoginSettings()

    const [resetPassword, { loading, fetching, error, data }] =
        useDataMutation(selfRegisterMutation)

    const handleSelfRegister = (values) => {
        resetPassword(values)
    }
    return (
        <CreateAccount
            createType={CREATE_FORM_TYPES.create}
            emailVerificationOnSuccess={emailConfigured}
            loading={loading || fetching}
            error={error}
            data={data}
            handleRegister={handleSelfRegister}
            prepopulatedFields={{}}
        />
    )
}

const requiredPropsForCreateAccount = ['selfRegistrationEnabled']

export const CreateAccountFormWrapper = ({ width }) => {
    const { uiLocale } = useLoginSettings()
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
                <CreateAccountForm />
            </FormContainer>
        </>
    )
}

CreateAccountFormWrapper.propTypes = {
    width: PropTypes.string,
}

import { useDataMutation } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { BackToLoginButton } from '../components/back-to-login-button.js'
import { FormContainer } from '../components/form-container.js'
import { FormNotice } from '../components/form-notice.js'
import { useParams } from '../hooks/index.js'
import { useLoginConfig } from '../providers/use-login-config.js'

const confirmEmailMutation = {
    resource: 'auth/confirmEmailAccount',
    type: 'create',
    data: (data) => ({ ...data }),
}

export const ConfirmEmailFormWrapper = ({ width }) => {
    const { uiLocale } = useLoginConfig()

    const [confirmEmail, { error, data }] =
        useDataMutation(confirmEmailMutation)
    const [parametersMissing, setParametersMissing] = useState(false)
    const params = useParams()

    useEffect(() => {
        const token = params.get('token')
        const email = params.get('email')

        if (token && email) {
            confirmEmail({ token, email })
        } else {
            setParametersMissing(true)
        }
    }, [confirmEmail, params])

    return (
        <>
            <FormContainer
                width={width}
                title={i18n.t('Email confirmation', { lng: uiLocale })}
            >
                {(error || parametersMissing) && (
                    <FormNotice
                        error={true}
                        title={i18n.t('Could not confirm email', {
                            lng: uiLocale,
                        })}
                    >
                        <span>
                            {i18n.t(
                                'Your link may have expired. Please try again and contact your system administrator if the problem remains.',
                                { lng: uiLocale }
                            )}
                        </span>
                    </FormNotice>
                )}
                {data && (
                    <FormNotice
                        valid={true}
                        title={i18n.t('Email confirmed', { lng: uiLocale })}
                    >
                        <span>
                            {i18n.t(
                                'Your email is confirmed. You can now use your username and password to log in.',
                                { lng: uiLocale }
                            )}
                        </span>
                    </FormNotice>
                )}
                <BackToLoginButton uiLocale={uiLocale} fullWidth={true} />
            </FormContainer>
        </>
    )
}

ConfirmEmailFormWrapper.propTypes = {
    width: PropTypes.string,
}

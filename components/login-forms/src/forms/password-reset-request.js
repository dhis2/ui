import { Button } from '@dhis2-ui/button'
import { useDataMutation, useLoginSettings } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import { spacers } from '@dhis2/ui-constants'
import { InputFieldFF, ReactFinalForm } from '@dhis2/ui-forms'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { BackToLoginButton } from '../components/back-to-login-button.js'
import { FormContainer } from '../components/form-container.js'
import { FormNotice } from '../components/form-notice.js'
import { FormSubtitle } from '../components/form-subtitle.js'
import { Link } from '../components/link.js'
import { NotAllowedNotice } from '../components/not-allowed-notice.js'
import { getIsRequired } from '../helpers/validators.js'
import { useGetErrorIfNotAllowed, useParams } from '../hooks/index.js'

// import { useLoginSettings } from '../providers/use-login-settings.js'

const passwordResetRequestMutation = {
    resource: 'auth/forgotPassword',
    type: 'create',
    data: ({ emailOrUsername }) => ({ emailOrUsername }),
}

const InnerPasswordResetRequestForm = ({
    handleSubmit,
    formSubmitted,
    isRequired,
    uiLocale,
    loading,
}) => {
    const params = useParams()

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <ReactFinalForm.Field
                        name="emailOrUsername"
                        label={i18n.t('Username or email', { lng: uiLocale })}
                        component={InputFieldFF}
                        className={'inputField'}
                        validate={!formSubmitted ? null : isRequired}
                        key={formSubmitted ? 1 : 0}
                        initialFocus
                        readOnly={loading}
                        initialValue={params.get('username') || ''}
                    />
                </div>
                <div className="formButtons">
                    <Button
                        type="submit"
                        disabled={loading}
                        className="reset-btn"
                        primary
                    >
                        {loading
                            ? i18n.t('Sending...', { lng: uiLocale })
                            : i18n.t('Send password reset request form', {
                                  lng: uiLocale,
                              })}
                    </Button>
                    <Link className="no-underline" to="/">
                        <Button
                            secondary
                            disabled={loading}
                            className="reset-btn"
                        >
                            {i18n.t('Cancel', { lng: uiLocale })}
                        </Button>
                    </Link>
                </div>
            </form>
            <style>
                {`
        .inputField {
          margin-bottom: ${spacers.dp8};
        }
        .hiddenFields {
          display:none;
        }
        .formButtons {
          display: flex;
          flex-direction: column;
          gap: ${spacers.dp8};
          margin-bottom: ${spacers.dp16};
        }
        .reset-btn {
          width: 100%;
        }
        .no-underline {
          text-decoration: none;
        }
      `}
            </style>
        </>
    )
}

InnerPasswordResetRequestForm.propTypes = {
    formSubmitted: PropTypes.bool,
    handleSubmit: PropTypes.func,
    isRequired: PropTypes.func,
    loading: PropTypes.bool,
    uiLocale: PropTypes.string,
}

export const PasswordResetRequestForm = ({ uiLocale }) => {
    // depends on https://dhis2.atlassian.net/browse/DHIS2-14618
    const [resetPasswordRequest, { loading, fetching, error, data }] =
        useDataMutation(passwordResetRequestMutation)
    const [formSubmitted, setFormSubmitted] = useState(false)
    const isRequired = getIsRequired(uiLocale)

    const handlePasswordResetRequest = (values) => {
        setFormSubmitted(true)
        const validationError = isRequired(values.emailOrUsername)
        if (validationError) {
            return
        }
        resetPasswordRequest({ emailOrUsername: values.emailOrUsername })
    }
    return (
        <>
            <div>
                <div>
                    {error && (
                        <FormNotice
                            title={i18n.t('Password reset failed', {
                                lng: uiLocale,
                            })}
                            error={true}
                        >
                            <span>
                                {i18n.t(
                                    'The username might be invalid, your account might not allow password reset, or there might be a problem with your account email address.',
                                    { lng: uiLocale }
                                )}
                            </span>
                        </FormNotice>
                    )}
                    {data && (
                        <>
                            <FormNotice valid={true}>
                                <span>
                                    {i18n.t(
                                        "We've sent an email with a password reset link to your registered email address.",
                                        { lng: uiLocale }
                                    )}
                                </span>
                            </FormNotice>
                            <BackToLoginButton
                                uiLocale={uiLocale}
                                fullWidth={true}
                            />
                        </>
                    )}
                    {!data && (
                        <ReactFinalForm.Form
                            onSubmit={handlePasswordResetRequest}
                        >
                            {({ handleSubmit }) => (
                                <InnerPasswordResetRequestForm
                                    handleSubmit={handleSubmit}
                                    formSubmitted={formSubmitted}
                                    isRequired={isRequired}
                                    uiLocale={uiLocale}
                                    loading={loading || fetching}
                                />
                            )}
                        </ReactFinalForm.Form>
                    )}
                </div>
            </div>
        </>
    )
}

PasswordResetRequestForm.defaultProps = {
    uiLocale: 'en',
}

PasswordResetRequestForm.propTypes = {
    uiLocale: PropTypes.string,
}

const requiredPropsForPasswordReset = [
    'allowAccountRecovery',
    'emailConfigured',
]

export const PasswordResetRequestFormWrapper = ({ width }) => {
    const { uiLocale } = useLoginSettings()
    const { notAllowed } = useGetErrorIfNotAllowed(
        requiredPropsForPasswordReset
    )

    if (notAllowed) {
        return <NotAllowedNotice uiLocale={uiLocale} />
    }

    return (
        <>
            <FormContainer
                width={width}
                title={i18n.t('Reset password', { lng: uiLocale })}
            >
                <FormSubtitle>
                    <p>
                        {i18n.t(
                            'Enter your username below, a link to reset your password will be sent to your registered e-mail.',
                            { lng: uiLocale }
                        )}
                    </p>
                </FormSubtitle>
                <PasswordResetRequestForm uiLocale={uiLocale} />
            </FormContainer>
        </>
    )
}

PasswordResetRequestFormWrapper.propTypes = {
    width: PropTypes.string,
}

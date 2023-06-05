import { useDataMutation } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import { colors, spacers } from '@dhis2/ui-constants'
import { Button } from '@dhis2-ui/button'
import { InputFieldFF, ReactFinalForm, composeValidators, dhis2Password } from '@dhis2/ui-forms'
import PropTypes from 'prop-types'
import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { BackToLoginButton } from '../components/back-to-login-button.js'
import { FormContainer } from '../components/form-container.js'
import { FormNotice } from '../components/form-notice.js'
import { FormSubtitle } from '../components/form-subtitle.js'
import { NotAllowedNotice } from '../components/not-allowed-notice.js'
import { getIsRequired } from '../helpers/validators.js'
import { useGetErrorIfNotAllowed } from '../hooks/index.js'
import { useLoginForm } from '../login-form-provider/use-login-form.js'

const passwordUpdateMutation = {
    resource: 'auth/passwordReset',
    type: 'create',
    data: (data) => ({ ...data }),
}

const InnerPasswordUpdateForm = ({ handleSubmit, uiLocale, loading }) => {
    const isRequired = getIsRequired(uiLocale)

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <ReactFinalForm.Field
                        name="password"
                        type="password"
                        label={i18n.t('Password', { lng: uiLocale })}
                        component={InputFieldFF}
                        className={'inputField'}
                        validate={composeValidators(isRequired, dhis2Password)}
                        initialFocus
                        readOnly={loading}
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
                            ? i18n.t('Saving...', { lng: uiLocale })
                            : i18n.t('Save new password', {
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
          margin-bottom: var(--spacers-dp8);
        }
        .hiddenFields {
          display:none;
        }
        .formButtons {
          display: flex;
          flex-direction: column;
          gap: var(--spacers-dp8);          
          margin-bottom: var(--spacers-dp16);
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

InnerPasswordUpdateForm.propTypes = {
    handleSubmit: PropTypes.func,
    loading: PropTypes.bool,
    uiLocale: PropTypes.string,
}

export const PasswordUpdateForm = ({ token, uiLocale }) => {
    // depends on https://dhis2.atlassian.net/browse/DHIS2-14618
    const [updatePassword, { loading, fetching, error, data }] =
        useDataMutation(passwordUpdateMutation)

    const handlePasswordUpdate = (values) => {
        updatePassword({ newPassword: values.password, token })
    }
    return (
        <>
            <div>
                <div>
                    {error && (
                        <FormNotice
                            title={i18n.t('New password not saved', {
                                lng: uiLocale,
                            })}
                            error={true}
                        >
                            <span>
                                {i18n.t(
                                    'There was a problem saving your password. Try again or contact your system administrator.',
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
                                        'New password saved. You can use it to log in to your account.',
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
                        <ReactFinalForm.Form onSubmit={handlePasswordUpdate}>
                            {({ handleSubmit }) => (
                                <InnerPasswordUpdateForm
                                    handleSubmit={handleSubmit}
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

PasswordUpdateForm.defaultProps = {
    uiLocale: 'en',
}

PasswordUpdateForm.propTypes = {
    token: PropTypes.string,
    uiLocale: PropTypes.string,
}

// presumably these would need to be allowed
const requiredPropsForPasswordReset = [
    'allowAccountRecovery',
    'emailConfigured',
]

const PasswordUpdatePage = () => {
    const { uiLocale } = useLoginForm()
    const [searchParams] = useSearchParams()
    const token = searchParams.get('token') || ''
    // display error if token is invalid?
    const { notAllowed } = useGetErrorIfNotAllowed(
        requiredPropsForPasswordReset
    )

    if (notAllowed) {
        return <NotAllowedNotice uiLocale={uiLocale} />
    }

    return (
        <>
            <FormContainer
                width="320px"
                title={i18n.t('Choose new password', { lng: uiLocale })}
            >
                <FormSubtitle>
                    <p>
                        {i18n.t(
                            'Enter the new password for your account below',
                            { lng: uiLocale }
                        )}
                    </p>
                </FormSubtitle>
                <PasswordUpdateForm uiLocale={uiLocale} token={token} />
                <style>
                    {`
        .pw-request-form-fields {
          min-width: 320px;
          display: flex;
          flex-direction: column;
          gap: ${spacers.dp16};
        }
        .inputs {
          display: flex;
          flex-direction: column;
          gap: ${spacers.dp8};
          margin-bottom: ${spacers.dp12};
        }
        .form-buttons {
          display: flex;
          flex-direction: column;
          gap: ${spacers.dp8};
        }
        .reset-submit-btn, .reset-cancel-btn {
          width: 100%;
        }
      `}
                </style>
            </FormContainer>
        </>
    )
}

export default PasswordUpdatePage

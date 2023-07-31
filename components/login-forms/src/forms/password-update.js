import { Button } from '@dhis2-ui/button'
import { useDataMutation } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import { spacers } from '@dhis2/ui-constants'
import {
    composeValidators,
    dhis2Password,
    InputFieldFF,
    ReactFinalForm,
} from '@dhis2/ui-forms'
import PropTypes from 'prop-types'
import React from 'react'
import { BackToLoginButton } from '../components/back-to-login-button.js'
import { FormContainer } from '../components/form-container.js'
import { FormNotice } from '../components/form-notice.js'
import { FormSubtitle } from '../components/form-subtitle.js'
import { Link } from '../components/link.js'
import { NotAllowedNotice } from '../components/not-allowed-notice.js'
import { getIsRequired } from '../helpers/validators.js'
import { useGetErrorIfNotAllowed, useParams } from '../hooks/index.js'
import { useLoginConfig } from '../providers/use-login-config.js'

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

export const PasswordUpdateFormWrapper = ({ width }) => {
    const { uiLocale } = useLoginConfig()
    const params = useParams()

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
                width={width}
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
                <PasswordUpdateForm
                    uiLocale={uiLocale}
                    token={params.get('token')}
                />
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

PasswordUpdateFormWrapper.propTypes = {
    width: PropTypes.string,
}

import { Button } from '@dhis2-ui/button'
import i18n from '@dhis2/d2-i18n'
import { colors, spacers } from '@dhis2/ui-constants'
import {
    composeValidators,
    createCharacterLengthRange,
    dhis2Password,
    dhis2Username,
    email,
    internationalPhoneNumber,
    InputFieldFF,
    ReactFinalForm,
} from '@dhis2/ui-forms'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { getIsRequired, removeHTMLTags } from '../helpers/index.js'
import { useLoginSettings } from '../providers/use-login-settings.js'
import { BackToLoginButton } from './back-to-login-button.js'
// import "../styles.css";
import { FormNotice } from './form-notice.js'
import { FormSubtitle } from './form-subtitle.js'
import { Link } from './link.js'

export const CREATE_FORM_TYPES = {
    create: 'create',
    confirm: 'confirm',
}

const AccountFormSection = ({ children, title }) => (
    <>
        <div className="account-form-section">
            {title && <p className="account-form-section-title">{title}</p>}
            {children}
        </div>
        <style>
            {`
      .account-form-section {
        display: flex;
        flex-direction: column;
        gap: ${spacers.dp8};
        margin-bottom: ${spacers.dp24};
      }
      .account-form-section-title {
        margin: 0;
        font-size: 14px;
        font-weight: 500;
        color: ${colors.grey900};
      }
      `}
        </style>
    </>
)

AccountFormSection.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    title: PropTypes.string,
}

const InnerCreateAccountForm = ({
    handleSubmit,
    uiLocale,
    loading,
    prepopulatedFields,
}) => {
    const isRequired = getIsRequired(uiLocale)

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <AccountFormSection
                        title={i18n.t('Log in details', { lng: uiLocale })}
                    >
                        <ReactFinalForm.Field
                            name="username"
                            label={i18n.t('Username', { lng: uiLocale })}
                            component={InputFieldFF}
                            className={'inputField'}
                            validate={composeValidators(
                                isRequired,
                                dhis2Username
                            )}
                            initialValue={prepopulatedFields?.username}
                            readOnly={
                                loading || Boolean(prepopulatedFields?.username)
                            }
                        />
                        <ReactFinalForm.Field
                            name="password"
                            label={i18n.t('Password', { lng: uiLocale })}
                            component={InputFieldFF}
                            className={'inputField'}
                            validate={composeValidators(
                                isRequired,
                                dhis2Password
                            )}
                            type="password"
                            readOnly={loading}
                            helpText={i18n.t(
                                'Minimum 8 characters, at least 1 uppercase, 1 lowercase, 1 number, 1 symbol'
                            )}
                        />
                    </AccountFormSection>
                    <AccountFormSection
                        title={i18n.t('Personal details', { lng: uiLocale })}
                    >
                        <ReactFinalForm.Field
                            name="firstName"
                            label={i18n.t('First name', { lng: uiLocale })}
                            component={InputFieldFF}
                            className={'inputField'}
                            validate={composeValidators(
                                isRequired,
                                createCharacterLengthRange(2, 160)
                            )}
                            readOnly={loading}
                        />
                        <ReactFinalForm.Field
                            name="surname"
                            label={i18n.t('Last name', { lng: uiLocale })}
                            component={InputFieldFF}
                            className={'inputField'}
                            validate={composeValidators(
                                isRequired,
                                createCharacterLengthRange(2, 160)
                            )}
                            readOnly={loading}
                        />
                        <ReactFinalForm.Field
                            name="email"
                            label={i18n.t('Email', { lng: uiLocale })}
                            component={InputFieldFF}
                            className={'inputField'}
                            validate={composeValidators(isRequired, email)}
                            initialValue={prepopulatedFields?.email}
                            readOnly={
                                loading || Boolean(prepopulatedFields?.email)
                            }
                        />
                        <ReactFinalForm.Field
                            name="phoneNumber"
                            label={i18n.t('Phone number', { lng: uiLocale })}
                            component={InputFieldFF}
                            className={'inputField'}
                            validate={composeValidators(
                                isRequired,
                                internationalPhoneNumber
                            )}
                            readOnly={loading}
                        />
                        <ReactFinalForm.Field
                            name="employer"
                            label={i18n.t('Employer', { lng: uiLocale })}
                            component={InputFieldFF}
                            className={'inputField'}
                            validate={isRequired}
                            readOnly={loading}
                        />
                    </AccountFormSection>
                    <AccountFormSection>
                        Captcha, if applicable
                    </AccountFormSection>
                </div>
                <div className="account-form-actions">
                    <Button primary type="submit" disabled={loading}>
                        {loading
                            ? i18n.t('Creating...', { lng: uiLocale })
                            : i18n.t('Create account', { lng: uiLocale })}
                    </Button>
                    <Link className="no-underline" to="/">
                        <Button secondary disabled={loading}>
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
        .account-form-actions {
          display: flex;
          gap: ${spacers.dp8};
        }
        .no-underline {
          text-decoration: none;
        }
      `}
            </style>
        </>
    )
}

InnerCreateAccountForm.propTypes = {
    handleSubmit: PropTypes.func,
    loading: PropTypes.bool,
    prepopulatedFields: PropTypes.object,
    uiLocale: PropTypes.string,
}

export const CreateAccount = ({
    createType,
    prepopulatedFields,
    emailVerificationOnSuccess,
    loading,
    error,
    data,
    handleRegister,
}) => {
    // depends on https://dhis2.atlassian.net/browse/DHIS2-14615
    const { applicationTitle, uiLocale } = useLoginSettings()

    useEffect(() => {
        // we should scroll top top of the page when an error is registered, so user sees this
        if (error) {
            // this is not working?
            window.scroll(0, 0)
        }
    }, [error])

    return (
        <>
            <div>
                {!error && (
                    <FormSubtitle>
                        <p>
                            {i18n.t(
                                'Enter your details below to create a {{- applicationName}} account.',
                                {
                                    lng: uiLocale,
                                    applicationName:
                                        removeHTMLTags(applicationTitle),
                                }
                            )}
                        </p>
                        {createType === CREATE_FORM_TYPES.create && (
                            <p>
                                {i18n.t('Already have an account?', {
                                    lng: uiLocale,
                                })}{' '}
                                <Link to="/">
                                    {i18n.t('Log in.', { lng: uiLocale })}
                                </Link>
                            </p>
                        )}
                    </FormSubtitle>
                )}

                <div>
                    {error && (
                        <FormNotice
                            title={i18n.t(
                                'Something went wrong, and we could not register your account',
                                { lng: uiLocale }
                            )}
                            error={true}
                        >
                            <span>{error?.message}</span>
                        </FormNotice>
                    )}
                    {data && (
                        <>
                            {emailVerificationOnSuccess && (
                                <FormNotice
                                    title={i18n.t(
                                        'Account created successfully',
                                        {
                                            lng: uiLocale,
                                        }
                                    )}
                                    valid
                                >
                                    <span>
                                        {i18n.t(
                                            'You can use your username and password to log in.',
                                            { lng: uiLocale }
                                        )}
                                    </span>
                                </FormNotice>
                            )}
                            {!emailVerificationOnSuccess && (
                                <>
                                    <FormNotice
                                        title={i18n.t(
                                            'Verify your email address',
                                            {
                                                lng: uiLocale,
                                            }
                                        )}
                                    >
                                        <span>
                                            {i18n.t(
                                                'Check your email for a link to verify your email address and finish setting up your account.',
                                                { lng: uiLocale }
                                            )}
                                        </span>
                                    </FormNotice>
                                </>
                            )}
                            <BackToLoginButton uiLocale={uiLocale} />
                        </>
                    )}
                    {!data && (
                        <ReactFinalForm.Form onSubmit={handleRegister}>
                            {({ handleSubmit }) => (
                                <InnerCreateAccountForm
                                    handleSubmit={handleSubmit}
                                    uiLocale={uiLocale}
                                    loading={loading}
                                    prepopulatedFields={prepopulatedFields}
                                />
                            )}
                        </ReactFinalForm.Form>
                    )}
                </div>
            </div>
        </>
    )
}

CreateAccount.propTypes = {
    createType: PropTypes.string.isRequired,
    emailVerificationOnSuccess: PropTypes.bool.isRequired,
    handleRegister: PropTypes.func.isRequired,
    data: PropTypes.object,
    error: PropTypes.object,
    loading: PropTypes.bool,
    prepopulatedFields: PropTypes.object,
}

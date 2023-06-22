import i18n from '@dhis2/d2-i18n'
import PropTypes from 'prop-types'
import React from 'react'
import { BackToLoginButton } from './back-to-login-button.js'
import { FormContainer } from './form-container.js'
import { FormNotice } from './form-notice.js'

export const NotAllowedNotice = ({ uiLocale }) => (
    <FormContainer width="320px">
        <FormNotice error>
            <span>
                {i18n.t(
                    'The requested page is not configured for your system',
                    { lng: uiLocale }
                )}
            </span>
        </FormNotice>
        <BackToLoginButton />
    </FormContainer>
)

NotAllowedNotice.propTypes = {
    uiLocale: PropTypes.string,
}

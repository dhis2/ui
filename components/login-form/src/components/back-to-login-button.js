import i18n from '@dhis2/d2-i18n'
import { Button } from '@dhis2-ui/button'
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

export const BackToLoginButton = ({ uiLocale, fullWidth }) => (
    <>
        <div>
            <Link className="no-underline" to="/">
                <Button secondary className={fullWidth ? 'fullWidth' : ''}>
                    {i18n.t('Back to log in page', {
                        lng: uiLocale,
                    })}
                </Button>
            </Link>
        </div>
        <style>
            {`
        .no-underline {
          text-decoration: none;
        }
        .fullWidth {
            width: 100%;
        }
      `}
        </style>
    </>
)

BackToLoginButton.defaultProps = {
    uiLocale: 'en',
}

BackToLoginButton.propTypes = {
    fullWidth: PropTypes.bool,
    uiLocale: PropTypes.string,
}

import { spacers } from '@dhis2/ui-constants'
import { NoticeBox } from '@dhis2-ui/notice-box'
import PropTypes from 'prop-types'
import React from 'react'

export const FormNotice = ({ title, error, valid, children }) => (
    <>
        <div className="form-error">
            <NoticeBox valid={valid} error={error} title={title}>
                {children}
            </NoticeBox>
        </div>
        <style>
            {`
        .form-error {
          margin-bottom: ${spacers.dp8};
        }
      `}
        </style>
    </>
)

FormNotice.defaultProps = {
    error: false,
    valid: false,
}

FormNotice.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    error: PropTypes.bool,
    title: PropTypes.string,
    valid: PropTypes.bool,
}

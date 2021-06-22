import { spacers, theme, colors, sharedPropTypes } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const Help = ({ children, valid, error, warning, className, dataTest }) => (
    <p
        className={cx(className, {
            valid,
            error,
            warning,
        })}
        data-test={dataTest}
    >
        {children}

        <style jsx>{`
            p {
                margin-top: ${spacers.dp4};
                margin-right: 0;
                margin-bottom: 0;
                margin-left: 0;
                font-size: 12px;
                line-height: 14px;
                color: ${theme.default};
                cursor: help;
            }

            .valid {
                color: ${colors.blue700};
            }

            .error {
                color: ${theme.error};
            }

            .warning {
                color: ${colors.yellow800};
            }
        `}</style>
    </p>
)

Help.defaultProps = {
    dataTest: 'dhis2-uicore-help',
}

Help.propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    error: sharedPropTypes.statusPropType,
    valid: sharedPropTypes.statusPropType,
    warning: sharedPropTypes.statusPropType,
}

export { Help }

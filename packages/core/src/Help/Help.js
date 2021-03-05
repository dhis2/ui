import { spacers, theme, colors, sharedPropTypes } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 * @param {Help.PropTypes} props
 * @returns {React.Component}
 * @example import { Help } from @dhis2/ui-core
 * @see Live demo: {@link /demo/?path=/story/help--default|Storybook}
 */
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

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} [children]
 * @prop {string} [className]
 * @prop {boolean} [valid] - `valid`, `warning`, and `error`, are mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 * @prop {string} [dataTest]
 */
Help.propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    error: sharedPropTypes.statusPropType,
    valid: sharedPropTypes.statusPropType,
    warning: sharedPropTypes.statusPropType,
}

export { Help }

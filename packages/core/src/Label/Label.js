import React from 'react'
import cx from 'classnames'
import css from 'styled-jsx/css'
import propTypes from '@dhis2/prop-types'
import { Required } from './Required.js'

const styles = css`
    label {
        display: block;
        box-sizing: border-box;
        font-size: 14px;
        line-height: 24px;
        padding: 0;
    }

    .disabled {
        cursor: not-allowed;
    }
`

const constructClassName = ({ disabled, className }) =>
    cx(className, {
        disabled: disabled,
    })

/**
 * @module
 * @param {Label.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { Label } from '@dhis2/ui-core'
 */
export const Label = ({
    htmlFor,
    children,
    required,
    disabled,
    className,
    dataTest,
}) => (
    <label
        htmlFor={htmlFor}
        className={constructClassName({ className, disabled })}
        data-test={dataTest}
    >
        <span>{children}</span>

        {required && <Required dataTest={`${dataTest}-required`} />}

        <style jsx>{styles}</style>
    </label>
)

Label.defaultProps = {
    dataTest: 'dhis2-uicore-label',
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} [htmlFor]
 * @prop {string} [children]
 * @prop {string} [className]
 * @prop {boolean} [required]
 * @prop {boolean} [disabled]
 * @prop {string} [dataTest]
 */
Label.propTypes = {
    children: propTypes.string,
    className: propTypes.string,
    dataTest: propTypes.string,
    disabled: propTypes.bool,
    htmlFor: propTypes.string,
    required: propTypes.bool,
}

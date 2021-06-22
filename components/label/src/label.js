import { Required } from '@dhis2-ui/required'
import propTypes from '@dhis2/prop-types'
import cx from 'classnames'
import React from 'react'
import css from 'styled-jsx/css'

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

Label.propTypes = {
    children: propTypes.string,
    className: propTypes.string,
    dataTest: propTypes.string,
    disabled: propTypes.bool,
    htmlFor: propTypes.string,
    required: propTypes.bool,
}

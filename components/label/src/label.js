import { colors } from '@dhis2/ui-constants'
import { Required } from '@dhis2-ui/required'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import css from 'styled-jsx/css'

const styles = css`
    label {
        display: block;
        box-sizing: border-box;
        font-size: 14px;
        line-height: 19px;
        color: ${colors.grey900};
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
    children,
    className,
    dataTest = 'dhis2-uicore-label',
    disabled,
    htmlFor,
    id,
    required,
}) => (
    <label
        id={id}
        htmlFor={htmlFor}
        className={constructClassName({ className, disabled })}
        data-test={dataTest}
    >
        <span>{children}</span>

        {required && <Required dataTest={`${dataTest}-required`} />}

        <style jsx>{styles}</style>
    </label>
)

Label.propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    disabled: PropTypes.bool,
    htmlFor: PropTypes.string,
    id: PropTypes.string,
    required: PropTypes.bool,
}

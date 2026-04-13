import { colors } from '@dhis2/ui-constants'
import { Required } from '@dhis2-ui/required'
import cx from 'classnames'
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

export interface LabelProps {
    children?: string
    className?: string
    dataTest?: string
    disabled?: boolean
    htmlFor?: string
    id?: string
    required?: boolean
}

const constructClassName = ({
    disabled,
    className,
}: {
    disabled?: boolean
    className?: string
}) =>
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
}: LabelProps) => (
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

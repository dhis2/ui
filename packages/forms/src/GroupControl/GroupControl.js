import React from 'react'
import { useField } from 'react-final-form'

import { Field } from '@dhis2/ui-core'
import propTypes from '@dhis2/prop-types'

export const GroupControl = ({ name, label, children, required }) => {
    const {
        meta: { error, touched },
    } = useField(name, { subscription: { error: true, touched: true } })

    const isError = !!error && !!touched
    let errorText

    if (isError) {
        if (typeof error === 'string') {
            errorText = error
        } else if (typeof error === 'object' && error[name]) {
            errorText = error[name]
        } else {
            errorText = null
        }
    }

    return (
        <Field
            label={label}
            required={required}
            error={isError}
            validationText={errorText}
        >
            {children}
        </Field>
    )
}

GroupControl.propTypes = {
    children: propTypes.node,
    label: propTypes.string,
    name: propTypes.string,
    required: propTypes.bool,
}

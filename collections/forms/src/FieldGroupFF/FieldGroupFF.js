import { FieldGroup } from '@dhis2/ui-widgets'
import PropTypes from 'prop-types'
import React from 'react'
import { useField } from 'react-final-form'

export const FieldGroupFF = ({ name, label, children, required }) => {
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
        <FieldGroup
            label={label}
            required={required}
            error={isError}
            name={name}
            validationText={errorText}
        >
            {children}
        </FieldGroup>
    )
}

FieldGroupFF.propTypes = {
    children: PropTypes.node,
    label: PropTypes.string,
    name: PropTypes.string,
    required: PropTypes.bool,
}

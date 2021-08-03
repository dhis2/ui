import { Checkbox } from '@dhis2-ui/checkbox'
import propTypes from 'prop-types'
import React from 'react'
import { Icon } from './icon.js'

export const IconizedCheckbox = ({
    checked,
    dataTest,
    hasChildren,
    indeterminate,
    children,
    loading,
    name,
    open,
    value,
    onChange,
}) => {
    const icon = (
        <Icon
            loading={loading}
            open={open}
            hasChildren={hasChildren}
            dataTest={dataTest}
        />
    )

    const checkboxLabel = (
        <>
            <span>{icon}</span>
            {children}

            <style jsx>{`
                span {
                    display: inline-block;
                    margin-right: 4px;
                }
            `}</style>
        </>
    )

    return (
        <>
            <Checkbox
                dense
                checked={checked}
                name={name}
                value={value}
                label={checkboxLabel}
                indeterminate={indeterminate}
                onChange={onChange}
            />
        </>
    )
}

IconizedCheckbox.propTypes = {
    checked: propTypes.bool.isRequired,
    children: propTypes.any.isRequired,
    dataTest: propTypes.string.isRequired,
    hasChildren: propTypes.bool.isRequired,
    indeterminate: propTypes.bool.isRequired,
    loading: propTypes.bool.isRequired,
    name: propTypes.string.isRequired,
    open: propTypes.bool.isRequired,
    value: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
}

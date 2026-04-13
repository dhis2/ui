import { Checkbox } from '@dhis2-ui/checkbox'
import React from 'react'
import { Icon } from './icon.tsx'

export interface IconizedCheckboxProps {
    checked: boolean
    dataTest: string
    hasChildren: boolean
    indeterminate: boolean
    children: React.ReactNode
    loading: boolean
    name: string
    open: boolean
    value: string
    onChange: (payload: { checked: boolean }, event: React.ChangeEvent<HTMLInputElement>) => void
}

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
}: IconizedCheckboxProps) => {
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
                    margin-inline-end: 4px;
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

import React from 'react'

export interface FieldSetProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
}

const FieldSet = ({
    className,
    children,
    dataTest = 'dhis2-uicore-fieldset',
}: FieldSetProps) => (
    <fieldset className={className} data-test={dataTest}>
        {children}
        <style jsx>{`
            fieldset {
                border: none;
                margin: 0;
                padding: 0;
            }
        `}</style>
    </fieldset>
)

export { FieldSet }

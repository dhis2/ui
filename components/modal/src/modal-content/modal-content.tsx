import React from 'react'

export interface ModalContentProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
}

export const ModalContent = ({
    children,
    className,
    dataTest = 'dhis2-uicore-modalcontent',
}: ModalContentProps) => (
    <div className={className} data-test={dataTest}>
        {children}

        <style jsx>{`
            div {
                order: 2;
                flex-grow: 2;
                overflow-y: auto;
            }
        `}</style>
    </div>
)

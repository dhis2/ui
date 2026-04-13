import { Button } from '@dhis2-ui/button'
import React from 'react'
import { IconAddAll } from './icons.tsx'

export interface AddAllProps {
    dataTest: string
    onClick: () => void
    disabled?: boolean
    label?: string
}

export const AddAll = ({ label, dataTest, disabled, onClick }: AddAllProps) => (
    <Button
        dataTest={dataTest}
        disabled={disabled}
        onClick={onClick}
        icon={
            <IconAddAll
                dataTest={`${dataTest}-iconaddall`}
                disabled={disabled}
            />
        }
    >
        {label}
    </Button>
)

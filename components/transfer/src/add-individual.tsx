import { Button } from '@dhis2-ui/button'
import React from 'react'
import { IconAddIndividual } from './icons.tsx'

export interface AddIndividualProps {
    dataTest: string
    onClick: () => void
    disabled?: boolean
    label?: string
}

export const AddIndividual = ({ label, dataTest, disabled, onClick }: AddIndividualProps) => (
    <Button
        dataTest={dataTest}
        disabled={disabled}
        onClick={onClick}
        icon={
            <IconAddIndividual
                disabled={disabled}
                dataTest={`${dataTest}-iconaddindividual`}
            />
        }
    >
        {label}
    </Button>
)

import { Button } from '@dhis2-ui/button'
import React from 'react'
import { IconRemoveIndividual } from './icons.tsx'

export interface RemoveIndividualProps {
    dataTest: string
    onClick: () => void
    disabled?: boolean
    label?: string
}

export const RemoveIndividual = ({
    label,
    dataTest,
    disabled,
    onClick,
}: RemoveIndividualProps) => (
    <Button
        dataTest={dataTest}
        disabled={disabled}
        onClick={onClick}
        icon={
            <IconRemoveIndividual
                disabled={disabled}
                dataTest={`${dataTest}-iconremoveindividual`}
            />
        }
    >
        {label}
    </Button>
)

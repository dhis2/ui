import { Button } from '@dhis2-ui/button'
import React from 'react'
import { IconRemoveAll } from './icons.tsx'

export interface RemoveAllProps {
    dataTest: string
    onClick: () => void
    disabled?: boolean
    label?: string
}

export const RemoveAll = ({ label, dataTest, disabled, onClick }: RemoveAllProps) => (
    <Button
        dataTest={dataTest}
        disabled={disabled}
        onClick={onClick}
        icon={
            <IconRemoveAll
                disabled={disabled}
                dataTest={`${dataTest}-iconremoveall`}
            />
        }
    >
        {label}
    </Button>
)

import propTypes from '@dhis2/prop-types'
import { Button } from '@dhis2/ui-core'
import React from 'react'
import { IconAddIndividual } from './icons.js'

export const AddIndividual = ({ label, dataTest, disabled, onClick }) => (
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

AddIndividual.propTypes = {
    dataTest: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired,
    disabled: propTypes.bool,
    label: propTypes.string,
}

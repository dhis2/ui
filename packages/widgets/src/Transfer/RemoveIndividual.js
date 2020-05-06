import { Button } from '@dhis2/ui-core'
import React from 'react'
import propTypes from '@dhis2/prop-types'

import { IconRemoveIndividual } from './icons.js'

export const RemoveIndividual = ({ label, dataTest, disabled, onClick }) => (
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

RemoveIndividual.propTypes = {
    dataTest: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired,
    disabled: propTypes.bool,
    label: propTypes.string,
}

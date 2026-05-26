import { Button } from '@dhis2-ui/button'
import PropTypes from 'prop-types'
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
    dataTest: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    label: PropTypes.string,
}

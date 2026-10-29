import { Button } from '@dhis2-ui/button'
import PropTypes from 'prop-types'
import React from 'react'
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
    dataTest: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    label: PropTypes.string,
}

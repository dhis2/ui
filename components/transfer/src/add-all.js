import { Button } from '@dhis2-ui/button'
import propTypes from '@dhis2/prop-types'
import React from 'react'
import { IconAddAll } from './icons.js'

export const AddAll = ({ label, dataTest, disabled, onClick }) => (
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

AddAll.propTypes = {
    dataTest: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired,
    disabled: propTypes.bool,
    label: propTypes.string,
}

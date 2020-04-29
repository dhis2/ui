import React from 'react'
import propTypes from '@dhis2/prop-types'

import { Button } from '../Button'
import { IconAddAll } from './icons'

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

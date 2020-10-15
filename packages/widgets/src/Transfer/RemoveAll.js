import propTypes from '@dhis2/prop-types'
import { Button } from '@dhis2/ui-core'
import React from 'react'
import { IconRemoveAll } from './icons.js'

export const RemoveAll = ({ label, dataTest, disabled, onClick }) => (
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

RemoveAll.propTypes = {
    dataTest: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired,
    disabled: propTypes.bool,
    label: propTypes.string,
}

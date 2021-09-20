import { Button } from '@dhis2-ui/button'
import PropTypes from 'prop-types'
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
    dataTest: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    label: PropTypes.string,
}

import { Button } from '@dhis2-ui/button'
import PropTypes from 'prop-types'
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
    dataTest: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    label: PropTypes.string,
}

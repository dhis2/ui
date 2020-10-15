import propTypes from '@dhis2/prop-types'
import React from 'react'
import { Button } from '../Button/Button.js'

const InputClearButton = ({ onClear, clearText, className, dataTest }) => (
    <Button
        small
        secondary
        dataTest={dataTest}
        onClick={onClear}
        type="button"
        className={className}
    >
        {clearText}
    </Button>
)

InputClearButton.propTypes = {
    clearText: propTypes.string.isRequired,
    dataTest: propTypes.string.isRequired,
    onClear: propTypes.func.isRequired,
    className: propTypes.string,
}

export { InputClearButton }

import { Button } from '@dhis2-ui/button'
import PropTypes from 'prop-types'
import React from 'react'

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
    clearText: PropTypes.string.isRequired,
    dataTest: PropTypes.string.isRequired,
    onClear: PropTypes.func.isRequired,
    className: PropTypes.string,
}

export { InputClearButton }
